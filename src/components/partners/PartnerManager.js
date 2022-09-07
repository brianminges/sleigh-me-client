const remoteURL = "http://localhost:8000"

export const addPartners = (partners) => {
    return fetch(`${remoteURL}/partners`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON. stringify(partners)
    })
    .then(res => res.json())
}

export const getPartner = (groupId) => {
    return fetch(`${remoteURL}/groups/${groupId}/partner_alert`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
}

export const getMemberPartners = (userId) => {
    return fetch(`${remoteURL}/partners/${userId}/partner_by_giver`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
}