import React from "react";
import Card from 'react-bootstrap/Card'

import LeoDiCap from '../img/leo-dicap.jpg'
import {Link} from "react-router-dom";

import '../css/experimental.css'

const Experimental = (props) => {

    return (
        <Card className="exp-card" href={"/person/cqYrVcYgpUI"}>
            <Link to="/person/cqYrVcYgpUI" style={{ height: '100%', width: '100%', textDecoration: 'none'}}>
                <Card.Img className="exp-image" variant="top" src={LeoDiCap} />
                <Card.Body className="exp-body">
                    <Card.Title className="exp-title">Leonardo DiCaprio</Card.Title>
                    <Card.Text className="exp-text">Billy Costigan</Card.Text>
                </Card.Body>
            </Link>
        </Card>
    )
}

export default Experimental;