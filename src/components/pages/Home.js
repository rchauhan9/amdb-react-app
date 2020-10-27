import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SimpleSearch from "../SimpleSearch";
import Experimental from "../Experimental";

import '../../css/pages/home.css';

const Home = () => {
    return (
        <Container fluid="lg" className="home-container">
            <Row className="search-row">
                <Col className="search-col">
                    <SimpleSearch />
                    <Button variant="primary">Search</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Experimental />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;