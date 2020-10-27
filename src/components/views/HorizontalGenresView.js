import React from "react";
import GenreCard from "../cards/GenreCard";

import HScrollView from "./HScrollView";

const HorizontalGenresView = ({genres}) => {

    const renderGenres = (genres) => {
        return genres.map((genre, i) => {
            return (
                <GenreCard genre={genre.genre} key={i} />
            )
        })
    }

    return (
        <HScrollView>
            {renderGenres(genres)}
        </HScrollView>
    )
}

export default HorizontalGenresView;