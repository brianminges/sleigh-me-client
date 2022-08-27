const remoteURL = "http://localhost:8000"

export const getMemberById = (id) => {
    return fetch(`${remoteURL}/members/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("sm_token")}`
        }
    })
    .then(res => res.json())
}

export const getAllMembers = () => {
    return fetch(`${remoteURL}/members`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("sm_token")}`
        }
    })
    .then(res => res.json())
}