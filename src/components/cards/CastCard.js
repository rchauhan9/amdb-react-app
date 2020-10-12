import React from 'react';
import LeoDiCap from '../../img/leo-dicap.jpg';

import '../../css/person-card.css'

const CastCard = (props) => {
    return (
        <div className="cast-card">
            <div className="card person-card">
                <img src={LeoDiCap} className="card-img-top person-card-img" alt={props.castMember.person.name}></img>
                <div className="card-body person-card-body">
                    {props.castMember.person.name}
                    <br />
                    {props.castMember.characters}
                </div>
            </div>
        </div>
    )
}

export default CastCard;