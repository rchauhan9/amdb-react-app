import React from 'react';
import {SEARCHABLES_BY_NAME} from "../../graphql/queries";
import {useQuery} from "@apollo/client";
import Suggestion from "../Suggestion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import '../../css/pages/search.css'

const Search = (props) => {

    console.log(props.match.params.term)

    const { loading, error, data } = useQuery(SEARCHABLES_BY_NAME, {
            variables: {
                name: props.match.params.term.split("+").join(" ")
            }
    });
    console.log(data)

    const renderResults = ({searchableByName}) => {
        if (searchableByName) {
            return (
                <>
                    {searchableByName.map((result, i) => {
                        return (
                            <Suggestion suggestion={result} id={i}/>
                        )
                    })}
                </>
            )
        }
    }

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <Container fluid="lg" className="search-container">
            <Row className="search-row">
                <Col className="search-col">
                    <ul>
                        {data && renderResults(data)}
                    </ul>
                    <a href={"/"}>Can't find what you were looking for? Suggest a title or person.</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Search;