import React, { useEffect, useState }from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addGroup, getGroupById, updateGroup } from "./GroupManager";
import { NavBar } from "./../nav/NavBar"
import "./GroupForm.css"
import "./../SleighMe.css"
import { joinGroup } from "../members/MemberManager";
import { parse } from "@fortawesome/fontawesome-svg-core";

 

export const GroupForm = () => {
    const [group, setGroup] = useState({});
    const {groupId} = useParams();
    const history = useNavigate();
    const currentUser = localStorage.getItem("userId")

    useEffect(() => {
        //Checks to see if this is creating or editing. If edit, the API is called.
        if (groupId) {
        getGroupById(groupId)
            .then(data => setGroup({
                id: data.id,
                name: data.name,
                creator: data.creator.id,
                guidelines: data.guidelines,
                date: data.date,
                time: data.time,
                spend: data.spend
            }))
        }
    }, [])

    const handleInputChange = (e) => {
        const newGroup = {...group}
        let selectedVal = e.target.value
        if (e.target.id.includes("spend")) {
            selectedVal = parseInt(selectedVal)
        }
        newGroup[e.target.id] = selectedVal
        setGroup(newGroup)
    }

    useEffect(() => {
        console.log(group)
    }, [group])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (groupId) {
            const editedGroup = {
                id: group.id,
                name: group.name,
                creator: group.creator,
                guidelines: group.guidelines,
                date: group.date,
                time: group.time,
                spend: parseInt(group.spend)
            }
            updateGroup(editedGroup)
                .then(() => history(`/groups/${groupId}`))
        } else {

            // const newMember = {
            //     member: parseInt(currentUser),
            //     group: group.id
            // }
            addGroup(group)
                    .then(() => history("/"))
        }
    }

    return (
        <>
        <main className="container__auth">
            <section>
                <form>
                    {groupId ? <h2>Edit group</h2> : <h2>Create group</h2>}
                    <div className="page__grid__group__form">
                        <div className="page__grid__top">
                            <h3>About your group</h3>
                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <div className="form__fieldset__group">
                                        <div className="form__fieldset__label">
                                            <label>Name</label>
                                        </div>
                                        <div>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                className="form__input__field" 
                                                placeholder="Group name"
                                                maxLength={"20"}
                                                required 
                                                autoFocus
                                                autoComplete="off" 
                                                onChange={handleInputChange}
                                                value={group.name}/>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <div className="form__fieldset__group">
                                        <div className="form__fieldset__label">
                                            <label>Guidelines</label>
                                        </div>
                                        <div>
                                            <textarea 
                                                id="guidelines"
                                                className="form__form__field form__textarea__field"
                                                placeholder="Leave important notes for your group."
                                                maxLength={"150"}
                                                required 
                                                autoComplete="off"
                                                onChange={handleInputChange}
                                                value={group.guidelines}>  
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <div className="form__fieldset__group">
                                        <div className="form__fieldset__label">
                                            <label>Maximum gift value</label>
                                        </div>
                                        <div>
                                            <input 
                                                type="number" 
                                                id="spend" 
                                                className="form__input__field" 
                                                placeholder="$0"
                                                min="0"
                                                step="any"
                                                required
                                                autoComplete="off" 
                                                onChange={handleInputChange}
                                                value={group.spend}/>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <h3>When will you draw names?</h3>
                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <div className="form__fieldset__group">
                                        <div className="form__fieldset__label">
                                            <label>Date</label>
                                        </div>
                                        <div>
                                            <input 
                                                type="date" 
                                                id="date" 
                                                className="form__input__field" 
                                                required
                                                onChange={handleInputChange}
                                                value={group.date}/>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <div className="form__fieldset__group">
                                        <div className="form__fieldset__label">
                                            <label>Time</label>
                                        </div>
                                        <div>
                                            <input 
                                                type="time" 
                                                id="time" 
                                                className="form__input__field" 
                                                required 
                                                onChange={handleInputChange}
                                                value={group.time}/>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            {/* <fieldset>
                                <button 
                                    className="btn" 
                                    type="submit"
                                    onClick={handleSubmit}>
                                    Submit
                                </button>
                            </fieldset> */}

                        </div>
                    </div>
                </form>
                <div className="page__grid__bottom">
                    <fieldset>
                        <button 
                            className="btn" 
                            type="submit"
                            onClick={handleSubmit}>
                            Submit
                        </button>
                    </fieldset>
                </div>
            </section>
            <section className="navbar">
            <NavBar></NavBar>
            </section>
        </main>
        </>
    )
}


