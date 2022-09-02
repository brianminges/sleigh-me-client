import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProfileById, updateProfile } from "./ProfileManager";
import { getAllGiftPreferences } from "../gift_preference/GiftPreferenceManager";
import "./ProfileForm.css"
import { getAllStates } from "../states/StateManager";

export const ProfileForm = () => {
    const [ profile, setProfile ] = useState({
        id: "",
        likes: "",
        dislikes: "",
        giftPreference: "",
        street: "",
        state: "",
        zip: ""
    });
    const [ giftPreferences, setGiftPreferences ] = useState([]);
    const [ states, setStates ] = useState([]);
    const {profileId} = useParams();
    const history = useNavigate();

    useEffect(() => {
        getProfileById(profileId)
            .then(data => setProfile({
                id: data.id,
                likes: data.likes,
                dislikes: data.dislikes,
                giftPreference: data.gift_preference.id,
                street: data.street,
                city: data.city,
                state: data.state.id,
                zip: data.zip
            }))     
    }, []);

    useEffect(() => {
        getAllGiftPreferences()
            .then(data => setGiftPreferences(data))
    }, []);

    useEffect(() => {
        getAllStates()
            .then(data => setStates(data))
    }, [])

    useEffect(() => {
        console.log(profile.giftPreference)
    }, [profile.giftPreference]);

    const handleInputChange = (e) => {
        const newProfile = {...profile}
        let selectedVal = e.target.value
        if (e.target.id.includes("gift") || e.target.id.includes("state")) {
            selectedVal = parseInt(selectedVal)
        }
        newProfile[e.target.id] = selectedVal
        setProfile(newProfile)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const editedProfile = {
            id: profile.id,
            likes: profile.likes,
            dislikes: profile.dislikes,
            gift_preference: parseInt(profile.giftPreference),
            street: profile.street,
            city: profile.city,
            state: parseInt(profile.state),
            zip: profile.zip
        }
        console.log(editedProfile)
        updateProfile(editedProfile)
            .then(() => history(-1))
    }

    return (
        <>
        <main className="container__auth">
            <section>
                <form >
                    <h2>Edit profile</h2> 
                    <div className="page__grid__group__form">
                        <div className="page__grid__top">
                            <h3>Gift preferences</h3>
                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <div className="form__fieldset__group">
                                        <div className="form__fieldset__label">
                                            <label>Likes</label>
                                        </div>
                                        <div>
                                            <input 
                                                type="text" 
                                                id="likes" 
                                                className="form__input__field" 
                                                placeholder="Likes"
                                                maxLength={"150"}
                                                autoFocus
                                                autoComplete="off" 
                                                onChange={handleInputChange}
                                                value={profile.likes}/>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <div className="form__fieldset__group">
                                        <div className="form__fieldset__label">
                                            <label>Dislikes</label>
                                        </div>
                                        <div>
                                            <input 
                                                type="text" 
                                                id="dislikes" 
                                                className="form__input__field" 
                                                placeholder="Dislikes"
                                                maxLength={"150"}
                                                autoComplete="off" 
                                                onChange={handleInputChange}
                                                value={profile.dislikes}/>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <div className="form__fieldset__group">
                                        <div className="form__fieldset__label">
                                            <label>Gift preference</label>
                                        </div>
                                        <div>
                                            <select 
                                                className="form__fieldset__select"
                                                id="giftPreference"
                                                onChange={handleInputChange}
                                                value={profile.giftPreference}>
                                                <option 
                                                    // name="giftPreference"
                                                    // id="giftPreference"
                                                    className="form__fieldset__option" 
                                                    value="0">
                                                    Please select ... 
                                                </option>
                                                {giftPreferences.map(giftPreference => (
                                                    <option 
                                                        key={giftPreference.id} 
                                                        value={giftPreference.id}
                                                        className="form__fieldset__option">
                                                        {giftPreference.option}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <h3 className="form__address__header">Address</h3>
                            <p className="form__address__notice"><em>Your address is visible only to you.</em></p>
                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <div className="form__fieldset__group">
                                        <div className="form__fieldset__label">
                                            <label>Street</label>
                                        </div>
                                        <div>
                                            <input 
                                                type="text" 
                                                id="street" 
                                                className="form__input__field" 
                                                placeholder="Street address"
                                                maxLength={"100"}
                                                autoComplete="off" 
                                                onChange={handleInputChange}
                                                value={profile.street}/>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <div className="form__fieldset__group">
                                        <div className="form__fieldset__label">
                                            <label>City</label>
                                        </div>
                                        <div>
                                            <input 
                                                type="text" 
                                                id="city" 
                                                className="form__input__field" 
                                                placeholder="city"
                                                maxLength={"20"}
                                                autoComplete="off" 
                                                onChange={handleInputChange}
                                                value={profile.city}/>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <div className="form__fieldset__group">
                                        <div className="form__fieldset__label">
                                            <label>State</label>
                                        </div>
                                        <div>
                                            <select 
                                                className="form__fieldset__select"
                                                id="state"
                                                onChange={handleInputChange}
                                                value={profile.state}>
                                                <option 
                                                    // name="states"
                                                    // id="states"
                                                    className="form__fieldset__option" 
                                                    value="0"> 
                                                    Please select ... 
                                                </option>
                                                {states.map(state => (
                                                    <option 
                                                        key={state.id} 
                                                        value={state.id}
                                                        className="form__fieldset__option">
                                                        {state.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <div className="form__fieldset__group">
                                        <div className="form__fieldset__label">
                                            <label>ZIP code</label>
                                        </div>
                                        <div>
                                            <input 
                                                type="text" 
                                                id="zip" 
                                                className="form__input__field" 
                                                placeholder="ZIP code"
                                                maxLength={"15"}
                                                autoComplete="off" 
                                                onChange={handleInputChange}
                                                value={profile.zip}/>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
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
        </main>
        </>
    )
}