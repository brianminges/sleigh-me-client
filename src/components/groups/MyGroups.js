import React, { useEffect, useState } from "react";
import { getMemberById } from "../members/MemberManager";
import { GroupCard } from "./GroupCard";
import "./../SleighMe.css"
import "./MyGroups.css"



export const MyGroups = ( {setUserId}  ) => {
    // const [member, setMember] = useState({});
    // const userId = setUserId
    // console.log(userId)

    // useEffect(() => {
    //     getMemberById(userId).then(data => setMember(data))
    // }, []) 

    

    return (
        <>
        <h1>'/'</h1>
        </>
    )
    


    // if (groups.length > 0) {
    //     return (
    //         <>
    //         <article className="groups__list">
    //         <h2>My Groups</h2>
    //             {groups.map(group =>
    //                 <GroupCard
    //                 key={group.id}
    //                 member={member} />
    //             )}
    //         </article>
    //         </>
    //     )
    // } 
    // else {
    //     return (
    //         <>
    //         <article className="groups__list__message">
    //         <h2>My Groups</h2>
    //         <p className="">You are not in any groups.</p>
    //         </article>
    //         </>
    //     )
    // }
}
 