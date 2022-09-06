import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getGroupById } from "./GroupManager"
import { addPartners, getPartner } from "../partners/PartnerManager";
import "./GroupDetail.css"

export const GroupDetail = () => {
    const [group, setGroup] = useState({});
    const {groupId} = useParams();
    const userId = parseInt(localStorage.getItem("userId"));
    const [ santaBtn, setSantaBtn ] = useState(true);
    const [ partner, setPartner ] = useState({})

    useEffect(() => {
        getGroupById(groupId)
            .then(data => setGroup(data))
    }, [])

    useEffect(() => {
        getPartner(groupId).then(data => setPartner(data))
    }, [])

    useEffect(() => {
        console.log('partner', partner)
    }, [partner])

    // This is invoked in shuffler(). It checks to make sure no index positions have the same values; if they don't, it stores the values in an object and pushes that object to finalPartners array. Once the length of finalPartners and arr1 are equal, each pairing is POSTED to the database. 
    const compareArrays = (arr1, arr2) => {
        let finalPartners = []
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                window.alert('bad shuffle')
                console.log('bad shuffle')
                finalPartners = []
                break
            } else {
                const partners = {
                    group: parseInt(groupId),
                    giver: arr1[i],
                    receiver: arr2[i]
                }
                finalPartners.push(partners)
                console.log(partners)
            }

        if (finalPartners.length === arr1.length) {
            finalPartners.forEach(partner => (
                addPartners(partner)
            ))
            window.alert('Get shopping!')
            setSantaBtn(false)
        }
        }
    }

    const shuffler = () => {
        if (group.members) {
            const indexArray = [];
            // Gets index values of each item in array and pushes to indexArray
            for (let i = 0; i < (group.members).length; i++) {
                let index = (group.members[i].id)
                indexArray.push(index)
            };

            // Makes copy of indexArray and shuffles using Fisher-Yates algorithm
            let newIndexArray = [...indexArray];
            let i = newIndexArray.length;
            while (--i > 0) {
                let randomNumber = Math.floor(Math.random() * (i + 1));
                [newIndexArray[randomNumber], newIndexArray[i]] = [newIndexArray[i], newIndexArray[randomNumber]];
            }

            // Checks to make sure no index positions have same values
            compareArrays(indexArray, newIndexArray)
        }
    }

    //Changes from yyyy-MM-dd to "weekday, month, date"
    const changeDateFormat = (inputDate) => {
        //Changes to ISO format
        const newDate = (inputDate+'T00:00:00')
         
        let date = new Date(newDate);
        return date.toLocaleString('en-US', {
            weekday: 'long',  
            day: 'numeric',  
            month: 'long',  
        });
    }

    //Changes from military time to standard time
    const changeTimeFormat = (inputTime) => {
        //Checks to make sure inputTime has a value
        if (typeof inputTime === 'string') {
            const time = inputTime.split(':')
            const hours = Number(time[0])
            const minutes = Number(time[1])

            if (hours === 0 && minutes === 0) {
                return "Midnight" + " "
            } else if (hours === 0 && minutes >= 10) {
                return "12:" + minutes + " " + "a.m." + " " 
            } else if (hours === 0 && minutes < 10) {
                return "12:" + "0" + minutes + " " + "a.m." + " "     
            } else if (hours === 12 && minutes === 0) {
                return "Noon" + " "   
            } else if (hours === 12 && minutes >= 10) {
                return "12:" + minutes + " " + "p.m." + " "
            } else if (hours === 12 && minutes < 10) {
                return "12:" + "0" + minutes + " " + "p.m." + " "          
            } else if (hours > 12 && minutes >= 10) {
                return (hours-12) + ":" + minutes + " " + "p.m." + " " 
            } else if (hours > 12 & minutes < 10) {
                return (hours-12) + ":" + "0" + minutes + " " + "p.m." + " " 
            } else if (hours < 12 && minutes >= 10) {
                return hours + ":" + minutes + " " + "a.m." + " "
            } else if (hours < 12 && minutes < 10) {
                return hours + ":" + "0" + minutes + " " + "a.m." + " "  
            }
        }
    }

 
    //Checks that group.creator has loaded before returning
    if (group.creator) {
        return (
            <>
            <article className="group__detail">
            <h2>{group.name}</h2>
            <div className="group__detail__infobox">
                { (partner.receiver)
                ?
                <div className="group__detail__pairing__infobox">
                <h3>HO HO HO!</h3>
                <p><strong>You've been assigned <Link to={`/members/${partner.receiver.id}/profile`}> {partner.receiver.user.first_name} {partner.receiver.user.last_name}</Link>! Check out {partner.receiver.user.first_name}'s profile and get shopping!</strong></p>
                </div>
                :
                null
                }
                <h3>Important details</h3>
                <p><strong>Guidelines:</strong> {group.guidelines}</p>
                <p><strong>Deliver by:</strong> {changeTimeFormat(group.time)}{changeDateFormat(group.date)} </p>
                <p><strong>Spending limit:</strong> ${group.spend}</p>
            </div>
 
            <div className="group__detail__members">
                <h3>Group members</h3>
            {   group.members 
                ? 
                group.members?.map(member => (
                <p key={member.user.id}><Link to={`/members/${member.user.id}/profile`} >{member.user.first_name} {member.user.last_name}</Link></p>))
                :
                <p>No members.</p>
            }
            </div>
            { group.creator.id === userId && (!partner.receiver?.id)
                ? 
                <div>
                    { santaBtn
                    ?
                    <button 
                        onClick={() => shuffler()}
                        className="btn">
                        Shuffle Santas
                    </button>
                    :
                    <p>Your Santas have been shuffled</p>
                    }
                    { santaBtn
                    ?
                    <Link to={`/groups/${groupId}/search`}>
                        <button 
                            className="btn">
                            Add user
                        </button>
                    </Link>
                    :
                    null
                    }
                    { santaBtn
                    ?
                    <Link to={`/groups/${groupId}/edit`}>
                        <button 
                            className="btn">
                            Edit
                        </button>
                    </Link>
                    :
                    null
                    }
                    
                    {/* <button 
                        onClick={() => shuffler()}
                        className="btn">
                        Shuffle Santas
                    </button> */}
                    {/* <Link to={`/groups/${groupId}/search`}><button className="btn">Add user</button></Link> */}
                    {/* <Link to={`/groups/${groupId}/edit`}><button className="btn">Edit</button></Link> */}
                </div>
                : 
                null
            }
            </article> 
            </>
        )
    }
}