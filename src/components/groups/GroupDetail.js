import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getGroupById } from "./GroupManager"
import { GroupMemberCard } from "./GroupMemberCard";

export const GroupDetail = () => {
    const [group, setGroup] = useState({});
    const {groupId} = useParams();

    useEffect(() => {
        getGroupById(groupId).then(data => setGroup(data))
    }, [])

    useEffect(() => {
        console.log(group)
    }, [group])

    return (
        <>
        <article>
            <h2>Hello</h2>
        {/* <h2>{group.name}</h2>
        <ul>
            {group?.members.map((member) => (
            <li>{member.user.first_name}</li>
            ))}
        </ul> */}
        {/* {group.map(member =>
            
            <GroupMemberCard
            member={member} />
            
        )} */}
        </article> 
        </>
    )
}