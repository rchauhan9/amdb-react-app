import React from 'react';
import 'react-awesome-slider/dist/styles.css';

import ImageProfileView from "./views/ImageProfileView";
import ImageThumbnailView from "./views/ImageThumbnailView";
import SectionHeaderView from "./views/SectionHeaderView";
import HorizontalGenresView from "./views/HorizontalGenresView";
import LongTextView from "./views/LongTextView";

import SectionCard from "./cards/SectionCard";
import HorizontalCastView from "./views/HorizontalCastView";
import RoleCard from "./cards/RoleCard";
import CastCard from "./cards/CastCard";
import Row from "react-bootstrap/Row";

const images = ['../../img/dark-knight.jpg', "../../img/leo-dicap.jpg"];

const TitleBody = (props) => {

    const renderDirectors = (directors) => {
        return directors.map(d => {
            return (
                <RoleCard role="Director" person={d.person} />
            )
        })
    }

    const renderWriters = (writers) => {
        return writers.map(w => {
            return (
                <RoleCard role="Writer" person={w.person} items={w.items}/>
            )
        })
    }

    const renderProducers = (producers) => {
        return producers.map(p => {
            return (
                <RoleCard role="Producer" person={p.person} items={p.items}/>
            )
        })
    }
    console.log(props)


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
            <Row>
                {renderDirectors(props.directors)}
                {renderWriters(props.writers)}
                {renderProducers(props.producers)}
            </Row>

            <SectionHeaderView title="Plot" />
            <SectionCard content={"Hello"}>
                <LongTextView tag="Storyline" text={props.storyline} />
                <LongTextView tag="Summary" text={props.summary} />
                <LongTextView tag="Tagline" text={props.tagline} />
            </SectionCard>
            <p>{props.description}</p>
            <SectionHeaderView title="Cast" />
            <HorizontalCastView cast={props.cast} />
            <SectionHeaderView title="Genres" />
            <HorizontalGenresView genres={props.genres} />
        </div>
    )
}

export default TitleBody;