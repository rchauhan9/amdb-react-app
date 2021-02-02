import React from 'react';
import styled from 'styled-components';

const HScrollView = (props) => {
    return (
        <HSV>
            {props.children}
        </HSV>
    )
}

const HSV = styled.div`
    display: flex;
    flex-direction: row;
    overflow: auto;
    width: 100%;
`
HSV.displayName = 'HSV'

export default HScrollView;