import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMemberById, leaveGroup } from "./MemberManager";
import { MemberGroupCard } from "./MemberGroupCard";
import { NavBar } from "../nav/NavBar";
// import "./../groups/GroupCard.css"
import "./MemberGroupCard.css"
import "./../SleighMe.css"
 
export const MemberGroups = () => {
    const [ member, setMember ] = useState([])
    const userId = localStorage.getItem("userId")
    const history = useNavigate();

    useEffect(() => {
        getMemberById(userId)
            .then(data => setMember(data))
    }, [])

    const handleLeaveGroup = (groupId) => {
        leaveGroup(groupId)
           .then(() => history(`/members/${member.id}`))
   }

    // useEffect(() => {
    //     console.log(member)
    // }, [member])

    
    if ((member.groups)?.length > 0) {
        return (
            <>
            <article className="groups__list__message">
            <h2>My Groups</h2>
            <p>Welcome, {member.user?.first_name}</p>
            </article>
            <article className="groups__list__body">
            {(member.groups).map(group =>
                    <MemberGroupCard
                    key={group.id}
                    group={group}
                    handleLeaveGroup={handleLeaveGroup} 
                    />
            )}
            </article>
            <NavBar /> 
            </>
        )
    } 
    else {
        return (
            <>
            <article className="groups__list__message">
            <h2>My Groups</h2>
            <p className="">You are not in any groups.</p>
            </article>
            <NavBar /> 
            </>
        )
    }
}
