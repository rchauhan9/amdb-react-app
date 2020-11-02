import React from 'react';

import '../../css/pages/page.css'
import {useQuery} from "@apollo/client";
import {PERSON_BY_URL_ID} from "../../graphql/queries";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainHeaderView from "../views/MainHeaderView";

import {formatDate} from "../../helpers/formatting";
import ImageProfileView from "../views/ImageProfileView";
import ImageThumbnailView from "../views/ImageThumbnailView";
import SectionHeaderView from "../views/SectionHeaderView";

const images = ['../../img/dark-knight.jpg', "../../img/leo-dicap.jpg"];

const Person = (props) => {

    const { loading, error, data } = useQuery(PERSON_BY_URL_ID, {
        variables: {
            urlID: props.match.params.id
        },
    });

    if (loading) return null;
    if (error) return `Error! ${error}`;
    if (data.personByUrlID == null) {
        return (
            <div>
                Page Not Found
            </div>
        )
    }

    console.log("Person ID:", props.match.params.id)
    console.log("Data:", data)

    return (
        <Container>
            <Row>
                <Col>
                    <MainHeaderView mainHeader={data.personByUrlID.name} subHeader={`(${formatDate(data.personByUrlID.dateOfBirth)})`} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ImageProfileView src={`${data.personByUrlID.id}/profile.jpg`} alt={`${data.personByUrlID.name} Profile Picture`} />
                </Col>
                <Col>
                    <ImageThumbnailView images={images} interval={3000} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <SectionHeaderView title="Starred In" />
                    <div>{data.personByUrlID.actedIn ? data.personByUrlID.actedIn[0] ? data.personByUrlID.actedIn[0].title.name : "not found" : "not found"}</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SectionHeaderView title="Directed" />
                    <div>{data.personByUrlID.directed ? data.personByUrlID.directed[0] ? data.personByUrlID.directed[0].title.name : "not found" : "not found"}</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SectionHeaderView title="Wrote" />
                    <div>{data.personByUrlID.wrote ? data.personByUrlID.wrote[0] ? data.personByUrlID.wrote[0].title.name : "not found" : "not found"}</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SectionHeaderView title="Produced" />
                    <div>{data.personByUrlID.produced ? data.personByUrlID.produced[0] ? data.personByUrlID.produced[0].title.name : "not found" : "not found" }</div>
                </Col>
            </Row>
        </Container>
    )
}

export default Person;