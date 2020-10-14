import React from "react";
import GenreCard from "../cards/GenreCard";

import '../../css/views/horizontal-genres-view.css'

const HorizontalGenresView = ({genres}) => {

    const renderGenres = (genres) => {
        return genres.map((genre, i) => {
            return (
                <GenreCard genre={genre.genre.name} key={i} />
            )
        })
    }

    return (
        <div className="genre-list">
            {renderGenres(genres)}
        </div>
    )
}

export default HorizontalGenresView;