import React from 'react';
import Card from "react-bootstrap/Card";

import ILink from "../links/ILink";

import Avatar from '../../img/person-avatar.png';
import '../../css/cards/cast-card.css'

const CastCard = (props) => {

    return (
        <Card className="card">
            <ILink to={`/person/${props.castMember.person.urlID}`}>
                <Card.Img className="image" variant="top" src={Avatar} alt={`${props.castMember.person.name} profile`}/>
                <Card.Body className="card-body">
                    <Card.Title className="title">{props.castMember.person.name}</Card.Title>
                    <Card.Text className="text">{props.castMember.characters}</Card.Text>
                </Card.Body>
            </ILink>
        </Card>
    )
}

export default CastCard;