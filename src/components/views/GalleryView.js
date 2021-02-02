import React from 'react';
import styled from 'styled-components';
import DK from '../../img/dark-knight.jpg'

const GalleryView = (props) => {
    return (
        <GalleryRow>
            <GalleryColOdd>
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
            </GalleryColOdd>
            <GalleryColEven>
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
            </GalleryColEven>
            <GalleryColOdd>
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
            </GalleryColOdd>
            <GalleryColEven>
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
                <GalleryImg src={DK} />
            </GalleryColEven>
        </GalleryRow>
    )
}

const GalleryRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    overflow: hidden;
`

const GalleryColOdd = styled.div`
    flex: 25%;
    max-width: 25%;
    padding: 0 6px;
    
    @media screen and (max-width: 800px) {
        flex: 50%;
        max-width: 50%;
    }
    
    @media screen and (max-width: 600px) {
        flex: 100%;
        max-width: 100%;
    }
`

const GalleryColEven = styled(GalleryColOdd)`
    transform: translateY(-140px);
`

const GalleryImg = styled.img`
    border-radius: 5px;
    transition: 0.3s;
    margin-top: 10px;
    vertical-align: middle;
    width: 100%;
    
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
`

export default GalleryView;