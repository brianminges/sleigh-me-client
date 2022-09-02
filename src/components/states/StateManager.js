const remoteURL = "http://localhost:8000"

export const getAllStates = () => {
    return fetch(`${remoteURL}/states`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
}