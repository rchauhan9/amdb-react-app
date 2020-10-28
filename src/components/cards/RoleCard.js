import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import ILink from "../links/ILink";

import LeoD from "../../img/leo-dicap.jpg";
import '../../css/cards/role-card.css'

const RoleCard = ({role, person, items}) => {

    const renderItems = (items) => {
        return items ? items.join(", ") : null
    }

    return (
        <Card className="role-card">
            <ILink to={`/person/${person.urlID}`}>
                <Card.Body className={`role-body ${role.toLowerCase()}`}>
                    <Card.Title className="role-title">{role}</Card.Title>
                    <div className="role-details">
                        <Card.Text className="role-text">{person.name}</Card.Text>
                        <Card.Text className="role-subtext">{renderItems(items)}</Card.Text>
                    </div>
                </Card.Body>
                <Row className="role-row">
                    <img className="role-image" src={LeoD} alt={`Christopher Nolan profile`} />
                </Row>
            </ILink>
        </Card>
    )
}

export default RoleCard;