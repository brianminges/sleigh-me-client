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
    })
    .then(res => res.json())
} 

 