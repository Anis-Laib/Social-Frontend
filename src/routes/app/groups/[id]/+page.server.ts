export const load = async ({ params, fetch, cookies }) => {    
    const cookie = cookies.get('token')
    const { id } = params
    const ress = await fetch('https://social-media.alwaysdata.net/api/auth/me', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + cookie,
            'Content-Type': 'application/json'
          }
    })
    const user = await ress.json()

    const res = await fetch(`https://social-media.alwaysdata.net/api/groups/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + cookie,
            'Content-Type': 'application/json'
          }
    })
    const data = await res.json()

    const group = data.group

    let isAdmin = group ? group.adminId == user.id : false
    let isUserAccepted = true

    if (!isAdmin) {
        // @ts-ignore
        const userMember = group.members.find(member => member.userId === user.id);
        isUserAccepted = userMember.status === "ACCEPTED" ? true : false
    }

    const resss = await fetch(`https://social-media.alwaysdata.net/api/groups/${id}/pendings`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + cookie,
            'Content-Type': 'application/json'
          }
    })
    const pendings = await resss.json()    

    return {
        group,
        isAdmin,
        isUserAccepted,
        pendings: pendings ? pendings.members : []
    }
    
}

export const actions = {
    accept: async ({ request , fetch, params, cookies }) => {
        const formData = await request.formData()
        const userId = formData.get('userId')

        const id = params.id
        const cookie = cookies.get('token')
        const res = await fetch(`https://social-media.alwaysdata.net/api/groups/${id}/accept/${userId}`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + cookie,
                'Content-Type': 'application/json'
            }
        })
        
        const data = await res.json()
    },
    post: async ({ request , fetch, params, cookies }) => {
        const formData = await request.formData()
        const content = formData.get('content')

        const groupId = params.id
        const cookie = cookies.get('token')

        console.log(groupId, content);
        

        const res = await fetch(`https://social-media.alwaysdata.net/api/posts`, {
            method: 'POST',
            body: JSON.stringify({
                content,
                groupId
            }),
            headers: {
                'Authorization': 'Bearer ' + cookie,
                'Content-Type': 'application/json'
            }
        })
        
        const data = await res.json()
        console.log(data);
        
    },
}