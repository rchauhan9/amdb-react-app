import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import styled from 'styled-components';

import ILink from "../links/ILink";
import {useImage} from "../hooks/useImage";
import {formatListToString} from "../../helpers/formatting";
import {PRESIGNED_URLS_PERSON} from "../../constants/constants";

import '../../css/cards/role-card.css'

const RoleCard = ({role, person, items}) => {

    const imgSrc = useImage(PRESIGNED_URLS_PERSON + `${person.id}/profile.jpg`)

    return (
        <StyledCard className="role-card">
            <ILink to={`/person/${person.urlID}`}>
                <CardBody className={role.toLowerCase()}>
                    <CardTitle>{role}</CardTitle>
                    <RoleDetails>
                        <RoleText>{person.name}</RoleText>
                        <RoleSubtext>{formatListToString(items, ", ")}</RoleSubtext>
                    </RoleDetails>
                </CardBody>
                <RoleRow>
                    <RoleImage src={imgSrc} alt={`${person.name} profile`} />
                </RoleRow>
            </ILink>
        </StyledCard>
    )
}


const StyledCard = styled(Card)`
    float: left;
    display: flex;
    flex-direction: column;

    height: 8rem !important;
    min-width: 16rem !important;
    width: 31% !important;
    margin: 10px;

    font-size: 12px !important;
    transition: 0.3s;
    
    background: #8a8a8a;
    
    &:hover {
        transform: translateY(-5px);
    }
`

const CardTitle = styled(Card.Title)`
    margin: 0 !important;
    font-size: 1.5rem !important;
    color: white;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const CardBody = styled(Card.Body)`
    height: 100% !important;
    width: 60%;
    float: left;
    text-align: left !important;
    display: flex;
    padding: 0 0 0 0.5rem !important;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0.3rem;
`

const RoleDetails = styled.div`
    margin-bottom: 2px !important;
`

const RoleText = styled(Card.Text)`
    margin: 0 !important;
    font-size: 1rem;
    color: white;
`

const RoleSubtext = styled(Card.Text)`
    margin: 0 !important;
    font-size: 0.8rem;
    color: gray;
`

const RoleRow = styled(Row)`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const RoleImage = styled.img`
    height: 90% !important;
    width: 70% !important;
    border-radius: 10px;
    margin: 0 5%;
    object-fit: cover;
    justify-content: center;
`
CardTitle.displayName = 'card-title'
RoleDetails.displayName = 'RoleDetails'
RoleText.displayName = 'RoleText'
RoleSubtext.displayName = 'RoleSubtext'
RoleImage.displayName = 'RoleImage'

export default RoleCard;