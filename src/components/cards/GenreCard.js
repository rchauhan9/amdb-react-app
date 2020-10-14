import React from "react";

import '../../css/cards/genre-card.css'

const GenreCard = ({genre}) => {
    return (
        <div className={`genre-card ${genre.toLowerCase()}`}>
            <h3 className="genre-text">{genre}</h3>
        </div>
    )
}

export default GenreCard;