import React from 'react';

import LeoDiCap from '../../img/leo-dicap.jpg';

import '../../css/person-card.css'

const PersonCard = () => {
    return (
        <div className="card person-card">
            <img src={LeoDiCap} className="card-img-top person-card-img" alt="Leonardo DiCaprio" />
            <div className="card-body">
                <p className="card-text">Leonardo DiCaprio</p>
            </div>
        </div>
    )
}

export default PersonCard;