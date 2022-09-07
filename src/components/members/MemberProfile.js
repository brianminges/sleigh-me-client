import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMemberById } from "./MemberManager";
import { getMemberPartners } from "../partners/PartnerManager";
import "./MemberProfile.css"


export const MemberProfile = () => {
    const [ memberProfile, setMemberProfile ] = useState({});
    const [ memberPartners, setMemberPartners ] = useState([]);
    const [ addressView, setAddressView ] = useState(false);
    const {userId} = useParams();
    const currentUser = localStorage.getItem("userId")
    const partnerIds = [];
    
    // Sets profile to empty object on first render after registration, or if not first render, loads data object.
    useEffect(() => {
        if (parseInt(userId) === currentUser) {
            getMemberById(userId).then(data => setMemberProfile({
                id: data.id,
                username: "",
                likes: "",
                dislikes: "",
                gift_preference: 1,
                street: "",
                city: "",
                state: 1,
                zip: ""

            }))
        } else {
            getMemberById(userId).then(data => setMemberProfile(data))
        }
    }, [])

    // Gets and sets the current user's partners
    useEffect(() => {
        getMemberPartners(currentUser).then(data => setMemberPartners(data))
    }, [])


    // Controls who can see address. If the giver is the current user and the profile is one of the current user's matches, the current user will see the address. 
    const separatePartnerIds = () => {
        memberPartners.forEach(partner => {
            if (partner.giver === parseInt(currentUser) && partner.receiver === parseInt(userId)) {
                partnerIds.push(partner.giver)
                console.log('partnerIDs', partnerIds)
            }
        })    
    }

    // When the memberPartners are set after the API call, separatePartnerIds() is invoked.
    useEffect(() => {
        separatePartnerIds()
    }, [memberPartners])

    // If the current user's id is among those that gets pushed to the partnerIds array (line 14), setAddress boolean is triggerd, revealing ~ line 96.  
    useEffect(() => {
        if (partnerIds.includes(parseInt(currentUser))) {
            setAddressView(true)
        }
    }, [partnerIds])


    //Checks that memberProfile.profile has loaded before returning. Line 48 checks if the current user is viewing own profile. Address will only render in that instance. Address will not show up for users viewing other profiles.
    if (memberProfile) {
        return (
        <>
        <article className="member__profile">
        <div>
            { memberProfile.id === parseInt(currentUser) 
                ? 
                <h2>My profile</h2> 
                :
                <h2>{memberProfile.user?.first_name} {memberProfile.user?.last_name}</h2>
            }
            <div className="member__profile__about">
                <p><strong>Username:</strong> {memberProfile.user?.username}</p>
                <p><strong>Likes:</strong> {memberProfile.profile?.likes}</p>
                <p><strong>Dislikes:</strong> {memberProfile.profile?.dislikes}</p>
                <p><strong>Gift preference:</strong> {memberProfile.profile?.gift_preference?.option}</p>
            </div>

            { memberProfile.id === parseInt(currentUser)   
                ?
                <div className="member__profile__address">
                    <p><em>Your address is visible only to you and your Secret Santa shopper.</em></p>
                    <p><strong>Address:</strong> </p>
                    <p>{memberProfile.profile?.street}</p>
                    <p>{memberProfile.profile?.city}, {memberProfile.profile?.state?.abbreviation} {memberProfile.profile?.zip}</p>
                </div>
                :
                null
            }

            { addressView
                ?
                <div className="member__profile__address">
                    <p><em>This address is visible only to {memberProfile.user?.first_name} and paired Secret Santa shoppers.</em></p>
                    <p><strong>Address:</strong> </p>
                    <p>{memberProfile.profile?.street}</p>
                    <p>{memberProfile.profile?.city}, {memberProfile.profile?.state?.abbreviation} {memberProfile.profile?.zip}</p>
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
 