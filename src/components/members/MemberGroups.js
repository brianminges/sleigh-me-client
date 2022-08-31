import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMemberById } from "./MemberManager";
import { MemberGroupCard } from "./MemberGroupCard";
// import "./../groups/GroupCard.css"
import "./MemberGroupCard.css"
import "./../SleighMe.css"
import { NavBar } from "../nav/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MemberGroups = () => {
    const [ member, setMember ] = useState([])
    const {userId} = useParams()

    useEffect(() => {
        getMemberById(userId).then(data => setMember(data))
    }, [])

    useEffect(() => {
        console.log(member)
    }, [member])
    
    if ((member.groups)?.length > 0) {
        return (
            <>
            <article className="groups__list__message">
            <h2>My Groups</h2>
            <p>Welcome, {member.user?.first_name}</p>
            {(member.groups).map(group =>
                    <MemberGroupCard
                    key={group.id}
                    group={group} 
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
