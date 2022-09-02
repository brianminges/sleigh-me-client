const remoteURL = "http://localhost:8000"

export const getProfileById = (id) => {
    return fetch(`${remoteURL}/profiles/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
}

export const updateProfile = (profile) => { 
    return fetch(`${remoteURL}/profiles/${profile.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(profile)
    })
}