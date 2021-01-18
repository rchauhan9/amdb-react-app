import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {useQuery} from "@apollo/client";
import {GENRE_BY_URL_ID} from "../../graphql/queries";

import GalleryView from '../views/GalleryView'

import '../../css/cards/genre-card.css'
import '../../css/pages/genre.css'

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
        <Container fluid="lg" className="genre-container">
            <br />
            <Row>
                <div className={`genre-header-box ${data.genreByUrlID.name.toLowerCase()}`}>
                    <div className="genre-header-text">{data.genreByUrlID.name}</div>
                </div>
            </Row>
            <GalleryView />
        </Container>
    )
}

export default Genre;