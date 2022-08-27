import React, { useEffect, useState } from "react";
import { getAllMembers } from "./MemberManager"
import { MemberGroupCard } from "./MemberGroupCard"

export const MembersList = () => {
    const [members, setMembers] = useState([])

    useEffect(() => {
        getAllMembers().then(data => setMembers(data))
    }, [])

    return (
        <>
        <article className="groups__list">
        <h2>My Groups</h2>
            {members.map(member =>
                <MemberGroupCard
                key={member.id}
                member={member} />
            )}
        </article> 
        </>
    )

}
 
