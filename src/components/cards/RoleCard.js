import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import ILink from "../links/ILink";
import {useImage} from "../hooks/useImage";
import {formatListToString} from "../../helpers/formatting";
import {PRESIGNED_URLS_PERSON} from "../../constants/constants";

import '../../css/cards/role-card.css'

const RoleCard = ({role, person, items}) => {

    const imgSrc = useImage(PRESIGNED_URLS_PERSON + `${person.id}/profile.jpg`)

    return (
        <Card className="role-card">
            <ILink to={`/person/${person.urlID}`}>
                <Card.Body className={`role-body ${role.toLowerCase()}`}>
                    <Card.Title className="role-title">{role}</Card.Title>
                    <div className="role-details">
                        <Card.Text className="role-text">{person.name}</Card.Text>
                        <Card.Text className="role-subtext">{formatListToString(items, ", ")}</Card.Text>
                    </div>
                </Card.Body>
                <Row className="role-row">
                    <img className="role-image" src={imgSrc} alt={`${person.name} profile`} />
                </Row>
            </ILink>
        </Card>
    )
}

export default RoleCard;