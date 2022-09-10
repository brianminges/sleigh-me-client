import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { searchMembers } from "./../members/MemberManager"
import { getGroupById } from "./GroupManager"
import { MemberSearchResultCard } from "../members/MemberSearchResultCard"
import { NavBar } from "./../nav/NavBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./../SleighMe.css"
import "./GroupSearch.css"


export const GroupSearch = () => {
    const [ searchValue, setSearchValue ] = useState("")
    const [ members, setMembers ] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value
        if (e.target.id === "search") {
            setSearchValue(value)
        }
    }

    const handleSearch = (searchValue) => {
        searchMembers(searchValue)
            .then(data => {setMembers(data)})
    }

    return (
        <>
        <main className="container__search">
            <section>
                <form>
                    <h2>Add users</h2>
                    <div  className="page__grid__search__form">
                        <div className="page__grid__top">
                            <fieldset>
                                <div className="form__fieldset__item form__input">
                                    <div className="form__fieldset__group">
                                        <div className="form__fieldset__label">
                                            {/* <label>Search</label> */}
                                        </div>
                                        <div className="search__form__input__block">
                                        <input
                                            type="text"
                                            id="search"
                                            className="search__form__input__field"
                                            placeholder="Search by name"
                                            onChange={handleInputChange}
                                            autoComplete="off" />
                                        <button 
                                            type="button"
                                            className="search__form__input__btn"
                                            onClick={()=> {handleSearch(searchValue)}}>
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </form>
            </section>
            <section>
            { members.length > 0 
                ? 
                <div className="search__results">
                    {members.map(member =>
                        <MemberSearchResultCard
                        key={member.id}
                        member={member} />
                    )}
                </div>
                : 
                <div>
                    Your results will be displayed here.
                </div>
            }
            </section>
            <article className="navbar__without__assignments">
                <NavBar />
            </article>
        </main>
        </>
    )
}



