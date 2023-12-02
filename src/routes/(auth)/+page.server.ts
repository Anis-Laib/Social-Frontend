import { redirect } from '@sveltejs/kit';

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
        } else {
            return { user: data.user }
        }
        
    }
}

export const actions = {
    default: async ({ request , fetch, cookies }) => {
        const formData = await request.formData()
        const email = formData.get('email')
        const password = formData.get('password')        

        const res = await fetch('https://social-media.alwaysdata.net/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                password,
                email,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()

        if (data.token) {
            cookies.set('token', data.token, {
                path: '/',
                maxAge: 8 *60 *60
            })
            throw redirect(302, '/app')
        }
        
    }
}