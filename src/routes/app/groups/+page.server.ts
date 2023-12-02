export const load = async ({ fetch }) => {
    const res = await fetch('https://social-media.alwaysdata.net/api/groups', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const groups = await res.json()    

    return {
        groups
    }
}

export const actions = {
    create: async ({ request, fetch, cookies }) => {
        const formData = await request.formData()
        const name = formData.get('name')
        const isPrivate = formData.get('isPrivate') == "yes" ? true : false

        const token = cookies.get('token')

        const res = await fetch('https://social-media.alwaysdata.net/api/groups', {
            method: 'POST',
            body: JSON.stringify({
                name,
                isPrivate
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })

        const data = await res.json()

        console.log(data);
    },
    join: async ({ request, fetch, cookies }) => {
        const formData = await request.formData()
        const id = formData.get('id')

        const token = cookies.get('token')

        const res = await fetch('https://social-media.alwaysdata.net/api/groups/' + id + '/join', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })

        const data = await res.json()
    }
}