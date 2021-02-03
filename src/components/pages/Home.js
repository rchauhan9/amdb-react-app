import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styled from 'styled-components';
import Experimental from "../Experimental";

import HScrollView from "../views/HScrollView";
import ImageProfileView from "../views/ImageProfileView";
import {PRESIGNED_URLS_TITLE, PROFILE} from "../../constants/constants";

const Home = () => {
    return (
        <Container fluid="lg" className="home-container" style={{ 'background': '#232323', 'border': '4px solid red'}}>
            <HomeRow>
                <HomeCol>
                    <h1>What's New</h1>
                    <HScrollView>
                        <img src="https://test-amdb.s3.eu-west-2.amazonaws.com/dark-knight.jpg" alt="Dark knight image was supposed to be here" />
                        <ImageProfileView src={PRESIGNED_URLS_TITLE + "17874e6d-ddd6-479a-9057-1b655e060bb6" + PROFILE} style={{margin: '20px'}}/>
                        <ImageProfileView src={PRESIGNED_URLS_TITLE + "17874e6d-ddd6-479a-9057-1b655e060bb6" + PROFILE} style={{margin: '20px'}}/>
                        <ImageProfileView src={PRESIGNED_URLS_TITLE + "17874e6d-ddd6-479a-9057-1b655e060bb6" + PROFILE} style={{margin: '20px'}}/>
                        <ImageProfileView src={PRESIGNED_URLS_TITLE + "17874e6d-ddd6-479a-9057-1b655e060bb6" + PROFILE} style={{margin: '20px'}}/>
                        <ImageProfileView src={PRESIGNED_URLS_TITLE + "17874e6d-ddd6-479a-9057-1b655e060bb6" + PROFILE} style={{margin: '20px'}}/>
                        <ImageProfileView src={PRESIGNED_URLS_TITLE + "17874e6d-ddd6-479a-9057-1b655e060bb6" + PROFILE} style={{margin: '20px'}}/>
                        <ImageProfileView src={PRESIGNED_URLS_TITLE + "17874e6d-ddd6-479a-9057-1b655e060bb6" + PROFILE} style={{margin: '20px'}}/>
                    </HScrollView>
                </HomeCol>
            </HomeRow>
            <HomeRow>
                <HomeCol>
                    <Experimental />
                </HomeCol>
            </HomeRow>
        </Container>
    )
}

const HomeRow = styled(Row)`
    max-height: 800px;
    height: 100vh;
    display: flex;
    justify-content: center;
`

const HomeCol = styled(Col)`
    border: 4px solid green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`

export default Home;