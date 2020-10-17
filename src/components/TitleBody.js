import React from 'react';
import 'react-awesome-slider/dist/styles.css';

import CastList from './CastList';
import ImageProfileView from "./views/ImageProfileView";
import ImageThumbnailView from "./views/ImageThumbnailView";
import SectionHeaderView from "./views/SectionHeaderView";
import HorizontalGenresView from "./views/HorizontalGenresView";
import LongTextView from "./views/LongTextView";

import SectionCard from "./cards/SectionCard";

const images = ['../../img/dark-knight.jpg', "../../img/leo-dicap.jpg"];

const TitleBody = (props) => {
    
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <ImageProfileView src={`${props.id}/profile.jpg`} alt={`${props.name} Movie Poster`} />
                </div>
                <div className="col-8">
                    <ImageThumbnailView images={images} interval={3000} />
                </div>
            </div>
            <br />
            <p><strong>Director:</strong> {props.directors[0].person.name}</p>
            <p><strong>Writers:</strong> {props.writers[0].person.name}</p>
            <SectionHeaderView title="Plot" />
            <SectionCard content={"Hello"}>
                <LongTextView tag="Storyline" text={props.storyline} />
                <LongTextView tag="Summary" text={props.summary} />
                <LongTextView tag="Tagline" text={props.tagline} />
            </SectionCard>
            <p>{props.description}</p>
            <CastList cast={props.cast} />
            <SectionHeaderView title="Genres" />
            <HorizontalGenresView genres={props.genres} />
        </div>
    )
}

export default TitleBody;