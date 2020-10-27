import React from 'react';
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";

import Avatar from '../../img/person-avatar.png';

import '../../css/cards/cast-card.css'

const CastCard = (props) => {

    return (
        <Card className="card">
            <Link to={`/person/${props.castMember.person.urlID}`} style={{ height: '100%', width: '100%', textDecoration: 'none'}}>
                <Card.Img className="image" variant="top" src={Avatar} alt={`${props.castMember.person.name} profile`}/>
                <Card.Body className="card-body">
                    <Card.Title className="title">{props.castMember.person.name}</Card.Title>
                    <Card.Text className="text">{props.castMember.characters}</Card.Text>
                </Card.Body>
            </Link>
        </Card>
    )
}

export default CastCard;