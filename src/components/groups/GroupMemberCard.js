import React, { useEffect } from "react";

export const GroupMemberCard = ( { member } ) => {

    useEffect(() => {
        console.log(member)
    }, [])

    return (
        <>
        <p>{member}</p>
        </>
    )
}