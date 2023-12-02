import { redirect } from '@sveltejs/kit'

export const load = async ({ fetch, cookies }) => {
    const cookie = cookies.get('token')
    if (cookie) {
        // check if token is valid send get request to /me with bearer token
        const res = await fetch('https://social-media.alwaysdata.net/api/auth/me', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + cookie,
                'Content-Type': 'application/json'
              }
        })

        const data = await res.json()        

        if (data.id) {
            throw redirect(302, '/app')
        }
        
    }
}

export const actions = {
    default: async ({ request , fetch }) => {
        const formData = await request.formData()
        const username = formData.get('username')
        const password = formData.get('password')
        const email = formData.get('email')
        const firstname = formData.get('firstname')
        const lastname = formData.get('lastname')
        const confirmPassword = formData.get('confirmPassword')        

        const res = await fetch('https://social-media.alwaysdata.net/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
                email,
                firstname,
                lastname,
                repeatPassword: confirmPassword
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()

        console.log(data);
        
        if (!data.message) {
            throw redirect(302, '/')
        }
    },
}