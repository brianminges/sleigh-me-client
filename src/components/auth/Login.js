import React, { useRef } from "react"
import { Link, useNavigate, Navigate, BrowserRouter as Router} from "react-router-dom"
import "./Auth.css"
import "./../SleighMe.css"


export const Login = ({ setUserId, setToken }) => {
 
    const username = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const history = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    // localStorage.setItem("token", res.token)
                    setToken(res.token)
                    setUserId(res.userId)
                    history('/')

                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <>
        <main className="container__auth">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Username or password was not valid.</div>
                <button className="modal__btn__mini" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <img src={"./../../images/sleigh.png"} alt="Santa guides his reindeer over evergreens" />
            <section>
                <form onSubmit={handleLogin}>
                    <h1>Sleigh Me</h1>
                    <h3>Please sign in</h3>
                    <div className="page__grid__auth">
                        <div className="page__grid__top">
                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <input 
                                        ref={username} 
                                        type="username" 
                                        id="username" 
                                        className="form__input__field" 
                                        placeholder="Username" 
                                        required 
                                        autoFocus
                                        autoComplete="off" />
                                </div>
                            </fieldset>
                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <input 
                                        ref={password} 
                                        type="password" 
                                        id="password" 
                                        className="form__input__field" 
                                        placeholder="Password" 
                                        required />
                                </div>
                            </fieldset>    
                        </div>
                        <div className="page__grid__bottom">
                            <fieldset>
                                <button 
                                    className="btn" 
                                    type="submit">
                                    Sign in
                                </button>
                            </fieldset>
                            <fieldset>
                                <Link to="/register">
                                    <button 
                                        className="btn" 
                                        type="button">
                                        Register
                                    </button>
                                </Link>
                            </fieldset>
                        </div>
                    </div>
                </form>
            </section>
        </main>
        </>
    )
}
