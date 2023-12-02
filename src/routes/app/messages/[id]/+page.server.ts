export const load = async ({ fetch, cookies, params }) => {
    const cookie = cookies.get('token')

    const id = params.id
    return {
        cookie,
        id
    }
}