import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { leaveGroup } from "../members/MemberManager";

export const MemberGroupCard = ( { group }) => {
    console.log(group)
    const {userId} = useParams();
    const history = useNavigate();
    const groupId = group.id

    const handleLeaveGroup = (group) => {
         leaveGroup(group)
            .then(() => history(`/groups/${group.id}`))
    }



    if (group?.creator.user.id === parseInt(userId)) {
        return (
            <>
            {/* <a href={`/groups/${group.id}`}> */}
            <section className="group__card">
                <div><h3 className="group__card__name"><Link to={`/groups/${group.id}`}>{group?.name}</Link></h3></div>
                    <div className="group__card__elements">
                        <p className="group__card__host">Hosted by {group?.creator.user.first_name + ' ' + group.creator.user.last_name}</p>
                        <button  
                            className="group__card__element btn__mini btn__mini__edit">
                            Edit
                        </button>
                        <button  
                            className="group__card__element btn__mini btn__mini__leave"
                            onClick={() => handleLeaveGroup(group.id)}>
                            Leave
                        </button>
                    </div>
            </section>
            {/* </a> */}
            </>
        )
    } else {
        return (
            <>
            <section className="group__card">
                <div><h3 className="group__card__name"><Link to={`/groups/${group?.id}`}>{group?.name}</Link></h3></div>
                    <div className="group__card__elements">
                        <p className="group__card__host">Hosted by {group?.creator.user.first_name + ' ' + group?.creator.user.last_name}</p>
                        <button 
                            className="group__card__element btn__mini btn__mini__leave"
                            onClick={() => handleLeaveGroup()}>
                            Leave
                        </button>
                    </div>
            </section>
            </>
        )
    }
}


