import React from 'react';
import {SEARCHABLES_BY_NAME} from "../../graphql/queries";
import {useQuery} from "@apollo/client";
import Suggestion from "../Suggestion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styled from 'styled-components';


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
        <SearchContainer fluid="lg" style={{  }}>
            <SearchRow>
                <SearchCol>
                    <ul>
                        {data && renderResults(data)}
                    </ul>
                    <a href={"/"}>Can't find what you were looking for? Suggest a title or person.</a>
                </SearchCol>
            </SearchRow>
        </SearchContainer>
    )
}

const SearchContainer = styled(Container)`
    border: 4px solid red;
    background: #232323;
`

const SearchRow = styled(Row)`
    max-height: 800px;
    height: 100vh;
    display: flex;
    justify-content: center;
`

const SearchCol = styled(Col)`
    border: 4px solid green;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Search;