import React from "react";

import ILink from "../links/ILink";
import '../../css/cards/genre-card.css'

const GenreCard = ({genre}) => {
    return (
        <ILink to={`/genre/${genre.urlID}`}>
            <div className={`genre-card ${genre.name.toLowerCase()}`}>
                <h3 className="genre-text">{genre.name}</h3>
            </div>
        </ILink>
    )
}

export default GenreCard;