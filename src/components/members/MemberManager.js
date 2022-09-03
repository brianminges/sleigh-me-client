const remoteURL = "http://localhost:8000"

export const getMemberById = (id) => {
    return fetch(`${remoteURL}/members/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
}

export const getAllMembers = () => {
    return fetch(`${remoteURL}/members`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
}

export const searchMembers = (searchTerm) => {
    return fetch(`${remoteURL}/members?q=${searchTerm}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }).then(res => res.json())
} 

export const joinGroup = (newMember, groupId) => {
    return fetch(`${remoteURL}/groups/${groupId}/join_group`, {
        method: 'POST',
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON. stringify(newMember)
    }).then(res => res.json())
}

export const leaveGroup = (groupId) => {
    return fetch(`${remoteURL}/groups/${groupId}/leave`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
        } 
    })
}
