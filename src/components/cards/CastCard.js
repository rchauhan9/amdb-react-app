import React from 'react';
import Card from "react-bootstrap/Card";

import ILink from "../links/ILink";
import {useImage} from "../hooks/useImage";
import {PRESIGNED_URLS_PERSON} from "../../constants/constants";

import {formatListToString} from "../../helpers/formatting";

import styled from "styled-components";

const CastCard = (props) => {

    const imgSrc = useImage( PRESIGNED_URLS_PERSON + `${props.castMember.person.id}/profile.jpg`)

    return (
        <CCard>
            <ILink to={`/person/${props.castMember.person.urlID}`}>
                <CardImg variant="top" src={imgSrc} alt={`${props.castMember.person.name} profile`}/>
                <CardBody>
                    <CardTitle>{props.castMember.person.name}</CardTitle>
                    <CardText>{formatListToString(props.castMember.characters, " / ")}</CardText>
                </CardBody>
            </ILink>
        </CCard>
    )
}

const CCard = styled(Card)`
    height: 210px;
    min-width: 150px !important;
    width: 100%;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    
    background: #8a8a8a;
    
    &:hover {
        transform: translateY(-5px);
    }
`

const CardBody = styled(Card.Body)`
    padding: 2px 8px !important;
    height: 25%;
    text-align: center;
`

const CardImg = styled(Card.Img)`
    width: 100%;
    height: 75%;
    object-fit: cover;
    justify-content: center;
`

const CardTitle = styled(Card.Title)`
    margin: 5px 0 0 0 !important;
    font-size: 14px !important;
    font-weight: bold;
    color: white;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const CardText = styled(Card.Text)`
    margin: 0;
    font-size: 12px;
    color: gray;
`

export default CastCard;