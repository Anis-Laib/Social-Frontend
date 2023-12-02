import { redirect } from '@sveltejs/kit'

export const load = async ({ cookies }) => {
    // logout
    cookies.set('token', '', {
        path: '/'
    })

    // redirect to /
    throw redirect(302, '/')
}