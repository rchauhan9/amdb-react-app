import React from "react";
import {Link} from "react-router-dom";

import '../../css/cards/genre-card.css'

const GenreCard = ({genre}) => {
    return (
        <Link to={`/genre/${genre.urlID}`} style={{ textDecoration: 'none' }}>
            <div className={`genre-card ${genre.name.toLowerCase()}`}>
                <h3 className="genre-text">{genre.name}</h3>
            </div>
        </Link>
    )
}

export default GenreCard;