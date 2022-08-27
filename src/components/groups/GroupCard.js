import React, { useEffect } from "react"
import "./GroupCard.css"

export const GroupCard = ( { group }) => {

    useEffect(() => {
        console.log(group)
    }, [])

    return (
        <>
        <section className="group__card">
            <div>
                <h3 className="group__card__name">{group.name}</h3>
                <p className="group__card__host">Hosted by {group.creator.user.first_name + ' ' + group.creator.user.last_name}</p>
            </div>

        </section>
        </>
    )

}
 