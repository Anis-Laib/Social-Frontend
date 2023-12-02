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

        if (!data.id) {
            throw redirect(302, '/')
        } else {
            return { user: data }
        }
    } else {
        throw redirect(302, '/')
    }
};