import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getGroupById } from "./GroupManager"

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
        <h2>{group.name}</h2>
        </>
    )
}