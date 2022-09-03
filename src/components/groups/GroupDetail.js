import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getGroupById } from "./GroupManager"
import "./GroupDetail.css"

export const GroupDetail = () => {
    const [group, setGroup] = useState({});
    const {groupId} = useParams();
    const userId = parseInt(localStorage.getItem("userId"));

    useEffect(() => {
        getGroupById(groupId).then(data => setGroup(data))
    }, [])

    useEffect(() => {
        console.log(group)
    }, [group])

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
            { group.creator.id === userId 
                ? 
                <div>
                    <button className="btn">Shuffle Santas</button>
                    <Link to={`/groups/${groupId}/search`}><button className="btn">Add user</button></Link>
                    <Link to={`/groups/${groupId}/edit`}><button className="btn">Edit</button></Link>
                </div>
                : 
                null
            }
            </article> 
            </>
        )
    }
}