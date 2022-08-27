import React, { useEffect, useState } from "react";
import { getAllGroups } from "./GroupManager"
import { GroupCard } from "./GroupCard";

export const GroupsList = () => {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        getAllGroups().then(data => setGroups(data))
    }, [])

    return (
        <>
        <article className="groups__list">
        <h2>All Groups</h2>
            {groups.map(group =>
                <GroupCard
                key={group.id}
                group={group} />
            )}
        </article> 
        </>
    )

}