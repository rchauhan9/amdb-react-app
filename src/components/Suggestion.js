import React from 'react';
import {Link} from "react-router-dom";

import {formatDate} from "../helpers/formatting";
import DarkKnight from '../img/dark-knight.jpg';

import '../css/suggestion.css';

const Suggestion = (props) => {

    return (
        <Link to={`/${props.suggestion.__typename.toLowerCase()}/${props.suggestion.urlID}`} style={{ textDecoration: 'none' }}>
            <div className="suggestion-container">
                <div className="suggestion-content">
                    <p className="main-item">{props.suggestion.name}</p>
                    <p className="sub-item">{props.suggestion.released ? props.suggestion.released : formatDate(props.suggestion.dateOfBirth)}</p>
                </div>
                <img className="suggestion-img" src={DarkKnight} alt={`${props.suggestion.name} profile`}/>
            </div>
        </Link>

    )
}

export default Suggestion;