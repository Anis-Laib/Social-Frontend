import { redirect } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
    const res = await fetch('https://social-media.alwaysdata.net/api/users', {
        method: 'GET'
    })

    const users = await res.json()
        
    return {
        users
    }
};

export const actions = {
    default: async ({ request, cookies }) => {

        const formData = await request.formData()
        const id = formData.get('id')
        const id2 = formData.get('id2')        

        const cookie = cookies.get('token')

        const users = [id, id2]
        
        const res = await fetch('https://social-media.alwaysdata.net/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookie
            },
            body: JSON.stringify({
                user1: id,
                user2: id2
            }),
        })

        const data = await res.json()

       if (data.chat) {
        throw redirect(302, 'messages/' + data.chat.id)
       }
        
    }
}