import React from "react";
import styled from 'styled-components';

const Section = styled.div`
    width: 100%;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: #373737;

    padding: 10px;
    margin: 10px 10px 10px -2px;
`

const SectionCard = (props) => {
    return (
        <Section>
            {props.children}
        </Section>
    )
}

Section.displayName = 'Section'

export default SectionCard;