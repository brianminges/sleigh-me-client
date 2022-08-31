import React, { useEffect, useState }from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addGroup } from "./GroupManager";
import "./GroupForm.css"
import "./../SleighMe.css"
import { NavBar } from "./../nav/NavBar"
 

export const GroupForm = () => {
    const [group, setGroup] = useState({});
    const {groupId} = useParams();
    const history = useNavigate();

    const handleInputChange = (e) => {
        const newGroup = {...group}
        let selectedVal = e.target.value
        if (e.target.id.includes("spend")) {
            selectedVal = parseInt(selectedVal)
        }
        newGroup[e.target.id] = selectedVal
        setGroup(newGroup)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addGroup(group).then(() => history('/'))
        // if (groupId) {
        //     editGroup(group)
        //     .then(() => history('/'))
        // }
    }

    return (
        <>
        <main className="container__auth">
            <section>
                <form >
                    {groupId ? <h2>Edit group</h2> : <h2>Create group</h2>}
                    <div className="page__grid__group__form">
                        <div className="page__grid__top">
                            <h3>About your group</h3>
                            <fieldset>
                                <div className="form__fieldset__item form__input">
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
                            </fieldset>

                            <fieldset>
                                <div className="form__fieldset__item form__input">
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
                            </fieldset>

                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <input 
                                        type="number" 
                                        id="spend" 
                                        className="form__input__field" 
                                        placeholder="Max gift amount"
                                        min="0"
                                        required
                                        autoComplete="off" 
                                        onChange={handleInputChange}
                                        value={group.spend}/>
                                </div>
                            </fieldset>
                            <h3>When will you draw names?</h3>
                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <input 
                                        type="date" 
                                        id="date" 
                                        className="form__input__field" 
                                        required
                                        onChange={handleInputChange}
                                        value={group.date}/>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <input 
                                        type="time" 
                                        id="time" 
                                        className="form__input__field" 
                                        required 
                                        onChange={handleInputChange}
                                        value={group.time}/>
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


