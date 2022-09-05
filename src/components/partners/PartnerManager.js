const remoteURL = "http://localhost:8000"

export const addPartners = (partners) => {
    return fetch(`${remoteURL}/partners`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON. stringify(partners)
    }).then(res => res.json())
}