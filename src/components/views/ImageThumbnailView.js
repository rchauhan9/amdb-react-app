import React from "react";

import '../../css/views/image-thumbnail-view.css'
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
        <div className="slider">
            <AutoplaySlider play={true} cancelOnInteraction={false} interval={interval} bullets={false}>
                <div data-src={require('../../img/dark-knight.jpg')} />
                <div data-src={require('../../img/leo-dicap.jpg')} />
            </AutoplaySlider>
        </div>

    )
}

export default ImageThumbnailView;