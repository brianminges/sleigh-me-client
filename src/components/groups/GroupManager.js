const remoteURL = "http://localhost:8000"

export const getAllGroups = () => {
    return fetch(`${remoteURL}/groups`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
}

export const getGroupById = (id) => {
    return fetch(`${remoteURL}/groups/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
}

export const addGroup = (newGroup) => {
    return fetch(`${remoteURL}/groups`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON. stringify(newGroup)
    })
    .then(res => res.json())
}

export const updateGroup = (group) => { 
    return fetch(`${remoteURL}/groups/${group.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(group)
    })
}

export const deleteGroup = (groupId) => {
    return fetch(`${remoteURL}/groups/${groupId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(groupId)
    })
}




