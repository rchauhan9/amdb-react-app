import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

import {formatDate} from "../helpers/formatting";
import DarkKnight from '../img/dark-knight.jpg';


const Suggestion = (props) => {

    return (
        <Link to={`/${props.suggestion.__typename.toLowerCase()}/${props.suggestion.urlID}`} style={{ textDecoration: 'none' }}>
            <SuggestionContainer>
                <SuggestionContent>
                    <MainItem>{props.suggestion.name}</MainItem>
                    <SubItem>{props.suggestion.released ? props.suggestion.released : formatDate(props.suggestion.dateOfBirth)}</SubItem>
                </SuggestionContent>
                <SuggestionImage src={DarkKnight} alt={`${props.suggestion.name} profile`}/>
            </SuggestionContainer>
        </Link>

    )
}

const SuggestionContainer = styled.div`
    height: 80px;
    width: 500px;

    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    background-color: #2f2f2f;
    
    &:hover {
        background-color: #3e3e3e;
    }
`

const SuggestionContent = styled.div`
    margin: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 10px;
`


const MainItem = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    flex: 1;
    width: 100%;
`
const SubItem = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: grey;
    margin: 0;
    flex: 1;
    width: 100%;
`
const SuggestionImage = styled.img`
    width: auto;
    height: 80%;
    margin: 10px;
    border-radius: 3px;
`

export default Suggestion;