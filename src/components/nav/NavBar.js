import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCirclePlus, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import "./../SleighMe.css"
import "./NavBar.css"


export const NavBar = () => {

    const history = useNavigate()
    const userId = localStorage.getItem("userId")

    const handleLogout = () => {
        localStorage.clear();
        history('/login');
    }

 

    return (
        <>
        <div className="navbar__items">
            
            <div className="navbar__item">
                <Link to="/"> 
                    <div>
                        <FontAwesomeIcon icon={faHouse} /> 
                    </div>
                    <div>
                        <p className="navbar__label">My Groups</p>
                    </div>
                </Link>
            </div>
            
            <div className="navbar__item">
                <Link to="/groups/create">
                    <div>
                        <FontAwesomeIcon icon={faCirclePlus} /> 
                    </div>
                    <div>
                        <p className="navbar__label">Create</p>
                    </div>
                </Link>
            </div>

            <div className="navbar__item">
                <Link to={`/members/${userId}/profile`}>
                    <div>
                        <FontAwesomeIcon icon={faUser} />  
                    </div>
                    <div > 
                        <p className="navbar__label">Profile</p>
                    </div>
                </Link>
            </div>

            <div className="navbar__item" id="navbar__item__right">
                <div>
                    <FontAwesomeIcon icon={faRightFromBracket} onClick={handleLogout} /> 
                </div>
                <div>
                    <p className="navbar__label">Logout</p>
                </div>
            </div>
        </div>
        </>
    )
}