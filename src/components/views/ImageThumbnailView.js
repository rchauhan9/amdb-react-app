import React from "react";
import styled from 'styled-components';

import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSlider from "react-awesome-slider";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const ImageThumbnailView = ({images, interval}) => {
    // const renderImages = (images) => {
    //     images.map((image, i) => {
    //         console.log(image)
    //         return <img src={'../../img/dark-knight.jpg'} key={i}/>
    //     })
    // }

    return (
        <Slider>
            <AutoplaySlider play={true} cancelOnInteraction={false} interval={interval} bullets={false}>
                <div data-src={require('../../img/dark-knight.jpg')} />
                <div data-src={require('../../img/leo-dicap.jpg')} />
            </AutoplaySlider>
        </Slider>

    )
}

const Slider = styled.div`
    border-radius: 40px;
`

export default ImageThumbnailView;