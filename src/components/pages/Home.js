import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SimpleSearch from "../SimpleSearch";
import Experimental from "../Experimental";

import '../../css/pages/home.css';
import HScrollView from "../views/HScrollView";
import ImageProfileView from "../views/ImageProfileView";
import {PRESIGNED_URLS_TITLE, PROFILE} from "../../constants/constants";

const Home = () => {
    return (
        <Container fluid="lg" className="home-container">
            <Row className="home-row">
                <Col className="home-col">
                    <h1>What's New</h1>
                    <HScrollView>
                        <ImageProfileView src={PRESIGNED_URLS_TITLE + "17874e6d-ddd6-479a-9057-1b655e060bb6" + PROFILE} style={{margin: '20px'}}/>
                        <ImageProfileView src={PRESIGNED_URLS_TITLE + "17874e6d-ddd6-479a-9057-1b655e060bb6" + PROFILE} style={{margin: '20px'}}/>
                        <ImageProfileView src={PRESIGNED_URLS_TITLE + "17874e6d-ddd6-479a-9057-1b655e060bb6" + PROFILE} style={{margin: '20px'}}/>
                        <ImageProfileView src={PRESIGNED_URLS_TITLE + "17874e6d-ddd6-479a-9057-1b655e060bb6" + PROFILE} style={{margin: '20px'}}/>
                        <ImageProfileView src={PRESIGNED_URLS_TITLE + "17874e6d-ddd6-479a-9057-1b655e060bb6" + PROFILE} style={{margin: '20px'}}/>
                        <ImageProfileView src={PRESIGNED_URLS_TITLE + "17874e6d-ddd6-479a-9057-1b655e060bb6" + PROFILE} style={{margin: '20px'}}/>
                        <ImageProfileView src={PRESIGNED_URLS_TITLE + "17874e6d-ddd6-479a-9057-1b655e060bb6" + PROFILE} style={{margin: '20px'}}/>
                    </HScrollView>
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