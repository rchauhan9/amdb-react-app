import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import CastList from './CastList';
import DarkKnight from '../img/dark-knight.jpg'
import LeoDiCap from '../img/leo-dicap.jpg'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const TitleBody = (props) => {
    
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <img className="img-fluid" src={DarkKnight} alt="The Dark Knight Movie Poster" />
                </div>
                <div className="col-8">
                    <AutoplaySlider play={true} cancelOnInteraction={false} interval={8000} bullets={false}>
                        <div data-src={DarkKnight} />
                        <div data-src={LeoDiCap} />
                    </AutoplaySlider>
                </div>
            </div>
            <br />
            <p><strong>Director:</strong> {props.directors[0].person.name}</p>
            <p><strong>Writers:</strong> {props.writers[0].person.name}</p>
            <br />
            <h3>Plot</h3>
            <hr />
            <p>{props.description}</p>
            <CastList cast={props.cast} />
            <h4>Genres</h4>
            <hr />
            <p>{props.genres[0].genre.name}</p>
        </div>
    )
}

export default TitleBody;