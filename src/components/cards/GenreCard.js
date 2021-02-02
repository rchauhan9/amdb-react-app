import React from "react";

import ILink from "../links/ILink";
import '../../css/cards/genre-card.css'
import styled from "styled-components";

const GenreCard = ({genre}) => {
    return (
        <ILink to={`/genre/${genre.urlID}`}>
            <GCard className={`${genre.name.toLowerCase()}`}>
                <GenreText className="genre-text">{genre.name}</GenreText>
            </GCard>
        </ILink>
    )
}

const GCard = styled.div`
    min-height: 150px;
    min-width: 250px;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
`

const GenreText = styled.h3`
    color: white;
    font-weight: bold;
`

GCard.displayName = 'genre-card'

export default GenreCard;