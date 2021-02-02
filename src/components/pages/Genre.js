import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {useQuery} from "@apollo/client";
import styled from "styled-components";

import GalleryView from '../views/GalleryView'
import {GENRE_BY_URL_ID} from "../../graphql/queries";

const Genre = (props) => {

    const { loading, error, data } = useQuery(GENRE_BY_URL_ID, {
        variables: {
            urlID: props.match.params.id
        },
    });
    console.log(data)

    if (loading) return null;
    if (error) return `Error! ${error}`;
    if (data.genreByUrlID == null) {
        return (
            <div>
                Page Not Found
            </div>
        )
    }

    return (
        <Container fluid="lg" style={{ 'background': '#232323' }}>
            <br />
            <Row>
                <GenreHeaderBox className={`${data.genreByUrlID.name.toLowerCase()}`}>
                    <GenreHeaderText>{data.genreByUrlID.name}</GenreHeaderText>
                </GenreHeaderBox>
            </Row>
            <GalleryView />
        </Container>
    )
}

const GenreHeaderBox = styled.div`
    min-height: 100px;
    max-height: 150px;
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 10px;

    display: flex;
    align-items: center;
`

const GenreHeaderText = styled.div`
    font-size: 4rem;
    padding-left: 1rem;
    color: white;
`

export default Genre;