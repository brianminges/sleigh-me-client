import React, {useEffect, useState} from "react"
import { searchMembers } from "./../members/MemberManager"
import { MemberSearchResultCard } from "../members/MemberSearchResultCard"
import { NavBar } from "./../nav/NavBar"
import "./../SleighMe.css"
import "./GroupSearch.css"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
  

export const GroupSearch = () => {
    const [ searchValue, setSearchValue ] = useState("")
    const [ members, setMembers ] = useState([]);
    const [ reset, setReset ] = useState(false)

    const handleInputChange = (e) => {
        const value = e.target.value
        if (e.target.id === "search") {
            setSearchValue(value)
        }
    }

    useEffect(() => {
        console.log(members)
    }, [members])

    const handleSearch = (searchValue) => {
        searchMembers(searchValue)
            .then(data => {setMembers(data)})
    }

    useEffect(() => {
        console.log(members)
    }, [members])

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
                                            {/* <label>Name</label> */}
                                        </div>
                                        <div className="search__form__input__block">
                                        <input
                                            type="text"
                                            id="search"
                                            className="search__form__input__field"
                                            placeholder="Search by name"
                                            onChange={handleInputChange}
                                            autocomplete="off" />
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
                    No results
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



