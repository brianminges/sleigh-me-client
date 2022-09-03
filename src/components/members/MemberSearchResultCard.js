import React from "react"
import "../members/MemberSearchResultCard.css"

export const MemberSearchResultCard = ({ member }) => {
    return (
        <>
        <div className="search__result">
            <div className="search__result__name">
                <p>{member.first_name} {member.last_name}</p>
                <p className="search__result__username">{member.username}</p>
            </div>
            <div>
                <button className="btn__mini__plus">+</button>
            </div>
        </div>  
        </>
    )
    

}