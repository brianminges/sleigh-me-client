const remoteURL = "http://localhost:8000"

export const getAllGroups = () => {
    return fetch(`${remoteURL}/groups`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("sm_token")}`
        }
    })
    .then(res => res.json())
}

export const getGroupById = (id) => {
    return fetch(`${remoteURL}/groups/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("sm_token")}`
        }
    })
    .then(res => res.json())
}