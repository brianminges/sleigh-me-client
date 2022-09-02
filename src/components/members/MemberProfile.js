import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMemberById } from "./MemberManager";
import "./MemberProfile.css"

export const MemberProfile = () => {

    const [memberProfile, setMemberProfile] = useState({});
    const {userId} = useParams();
    const currentUser = localStorage.getItem("userId")

    useEffect(() => {
        getMemberById(userId).then(data => setMemberProfile(data))
    }, [])

    useEffect(() => {
        console.log(memberProfile)
        console.log('userId', userId)
    }, [memberProfile])

    //Checks that memberProfile.profile has loaded before returning. Line 31 checks if the current user is viewing own profile. Address will only render in that instance. Address will not show up for users viewing other profiles.
    if (memberProfile.profile) {
        return (
        <>
        <article className="member__profile">
            <div>
        { memberProfile.id === parseInt(currentUser) 
            ? 
            <h2>My profile</h2> 
            :
            <h2>{memberProfile.user.first_name} {memberProfile.user.last_name}</h2>
        }
        <div className="member__profile__about">
        <p><strong>Username:</strong> {memberProfile.user.username}</p>
        <p><strong>Likes:</strong> {memberProfile.profile.likes}</p>
        <p><strong>Dislikes:</strong> {memberProfile.profile.dislikes}</p>
        <p><strong>Gift preference:</strong> {memberProfile.profile.gift_preference.option}</p>
        </div>
        { memberProfile.id === parseInt(currentUser)
            ?
            <div className="member__profile__address">
                <p><em>Your address is visible only to you</em></p>
                <p><strong>Address:</strong> </p>
                <p>{memberProfile.profile.street}</p>
                <p>{memberProfile.profile.city}, {memberProfile.profile.state.abbreviation} {memberProfile.profile.zip}</p>
            </div>
            :
            null
        }
            </div>
            <div>
        { memberProfile.id === parseInt(currentUser)
            ?
            <div>
                <Link to={`/profiles/${userId}/edit`}><button className="btn member__profile__button">Edit</button></Link> 
            </div>
            :
            null
        }
            </div>
        </article>
        </>
        )
    }
}