import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCirclePlus, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import "./../SleighMe.css"
import "./NavBar.css"


export const NavBar = () => {

    const history = useNavigate()

    const handleLogout = () => {
        localStorage.clear();
        history('/login');
    }

 

    return (
        <>
        <div className="navbar__items">
            
            <div className="navbar__item">
                <a href="#">
                <div>
                    <Link to="/"> <FontAwesomeIcon icon={faHouse} /> </Link>
                </div>
                <div>
                    <p className="navbar__label">My Groups</p>
                </div>
                </a>
            </div>
            
            <div className="navbar__item">
                <a href="#">
                <div>
                    <Link to="/groups/create"> <FontAwesomeIcon icon={faCirclePlus} /> </Link>
                </div>
                <div>
                    <p className="navbar__label">Create</p>
                </div>
                </a>
            </div>

            <div className="navbar__item">
                <a href="#">
                <div>
                    <Link to="/"> <FontAwesomeIcon icon={faUser} /> </Link> 
                </div>
                <div>
                    <p className="navbar__label">Profile</p>
                </div>
                </a>
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