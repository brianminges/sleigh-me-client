import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getGroupById } from "../groups/GroupManager";
import { joinGroup } from "./MemberManager"
import "../members/MemberSearchResultCard.css"

export const MemberSearchResultCard = ({ member }) => {

    const {groupId} = useParams();
    const history = useNavigate();

    

    const handleAddToGroup = () => {
        const newMember = {
            group: parseInt(groupId),
            member: member.member.id
        }

        joinGroup(newMember, groupId)
            .then(() => history(`/groups/${parseInt(groupId)}`))
    }
 


    return (
        <>
        <div className="search__result">
            <div className="search__result__name">
                <p>{member.first_name} {member.last_name}</p>
                <p className="search__result__username">{member.username}</p>
            </div>
            <div>
                <button 
                    className="btn__mini__plus"
                    onClick={() => handleAddToGroup()}>
                    +
                </button>
            </div>
        </div>  
        </>
    )
    

}