import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { leaveGroup } from "../members/MemberManager";

export const MemberGroupCard = ( { group, handleLeaveGroup, handleDeleteGroup }) => {
    // const history = useNavigate();
    const userId = localStorage.getItem("userId")

    // Checks to see if current user created the group. If so, user gets first 'return' statement. If not, gets second. 
    if (group?.creator.user.id === parseInt(userId)) {
        return (
            <>
            <section className="group__card">
                <div><h3 className="group__card__name"><Link to={`/groups/${group.id}`}>{group?.name}</Link></h3></div>
                    <div className="group__card__elements">
                        <p className="group__card__host">Hosted by {group?.creator.user.first_name + ' ' + group.creator.user.last_name}</p>
                        <Link to={`/groups/${group.id}/edit`} >
                            <button  
                                className="group__card__element btn__mini btn__mini__edit">
                                Edit
                            </button>
                        </Link>
                        <button  
                            className="group__card__element btn__mini btn__mini__leave"
                            onClick={() => handleDeleteGroup(group.id)} >
                            Delete
                        </button>
                    </div>
            </section>
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
                            onClick={() => handleLeaveGroup(group.id)}>
                            Leave
                        </button>
                    </div>
            </section>
            </>
        )
    }
}


