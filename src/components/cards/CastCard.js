import React from 'react';
import Avatar from '../../img/person-avatar.png';

import '../../css/person-card.css'

const CastCard = (props) => {
    return (
        <div className="cast-card">
            <div className="card person-card">
                <img src={Avatar} className="card-img-top person-card-img" alt={props.castMember.person.name}></img>
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