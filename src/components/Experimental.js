import React, {useContext, useState} from "react";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import RoleCard from "./cards/RoleCard";
import {useAccordionToggle} from "react-bootstrap/";
import {AccordionContext} from "react-bootstrap";


const role1 = {
    role: "Director",
    items: [],
    person: {
        id: "4c023e68-f85a-4d6e-b001-20558b51c30b",
        urlID: "1FZ38L0AoDU",
        name: "Name1 LastName1"
    }
}

const role2 = {
    role: "Producer",
    items: ["executive producer"],
    person: {
        id: "5c40a658-c70a-463a-b5aa-b8599b7a01d9",
        urlID: "4H6pkoicPos",
        name: "Name2 LastName2"
    }
}

const ContextAwareToggle = ({eventKey, callback}) => {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <button
            type="button"
            style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender', float: 'right' }}
            onClick={decoratedOnClick}
        >
            {isCurrentEventKey ? "See less" : "See more"}
        </button>
    );
}

const Experimental = (props) => {

    return (
        <Accordion>
            <Row>
                <RoleCard role={role1.role} person={role1.person} items={role1.items} />
                <RoleCard role={role2.role} person={role2.person} items={role2.items} />
                <RoleCard role={role2.role} person={role2.person} items={role2.items} />
            </Row>
            <Accordion.Collapse eventKey="0">
                <Row>
                    <RoleCard role={role1.role} person={role1.person} items={role1.items} />
                    <RoleCard role={role2.role} person={role2.person} items={role2.items} />
                </Row>
            </Accordion.Collapse>
            <ContextAwareToggle eventKey="0" />
        </Accordion>
    )
}

export default Experimental;