import { redirect } from '@sveltejs/kit';

export const load = async ({ fetch, cookies }) => {
    // const cookie = cookies.get('token')
    // const res = await fetch('https://social-media.alwaysdata.net/api/users/feed', {
    //     headers: {
    //         'Authorization': 'Bearer ' + cookie
    //     }
    // })

    // const posts = await res.json()

    // console.log(posts);
    
    // return {
    //     posts
    // }
    throw redirect(302, 'app/groups')
};