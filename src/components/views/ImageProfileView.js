import React from "react";
import styled from 'styled-components';

import {useImage} from "../hooks/useImage";

const ImageProfileView = ({src, alt}) => {

    const imgSrc = useImage(src)

    return (
        <IPV>
            <img src={imgSrc} alt={alt} />
        </IPV>
    )
}

const IPV = styled.div`
    min-width: 300px;
    height: 450px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    
    img {
        flex-shrink: 0;
        min-width: 100%;
        min-height: 100%;
        height: 100%;
    }
`

IPV.displayName = 'image-profile-view'

export default ImageProfileView;