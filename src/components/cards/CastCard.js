import React from 'react';
import Card from "react-bootstrap/Card";

import ILink from "../links/ILink";
import Avatar from '../../img/person-avatar.png'
import {useImage} from "../hooks/useImage";
import {PRESIGNED_URLS_PERSON} from "../../constants/constants";

import '../../css/cards/cast-card.css'
import {formatListToString} from "../../helpers/formatting";

const CastCard = (props) => {

    const imgSrc = useImage( PRESIGNED_URLS_PERSON + `${props.castMember.person.id}/profile.jpg`)

    return (
        <Card className="card">
            <ILink to={`/person/${props.castMember.person.urlID}`}>
                <Card.Img className="image" variant="top" src={imgSrc} alt={`${props.castMember.person.name} profile`}/>
                <Card.Body className="card-body">
                    <Card.Title className="title">{props.castMember.person.name}</Card.Title>
                    <Card.Text className="text">{formatListToString(props.castMember.characters, " / ")}</Card.Text>
                </Card.Body>
            </ILink>
        </Card>
    )
}

export default CastCard;