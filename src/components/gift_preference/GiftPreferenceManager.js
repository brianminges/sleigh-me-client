const remoteURL = "http://localhost:8000"

export const getAllGiftPreferences = () => {
    return fetch(`${remoteURL}/gift_preferences`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
}