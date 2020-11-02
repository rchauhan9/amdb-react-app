import React, {useEffect, useState} from "react";

import '../../css/views/image-profile-view.css'
import {useImage} from "../hooks/useImage";

const ImageProfileView = ({src, alt}) => {

    const imgSrc = useImage(src)

    return (
        <div className="img-container">
            <img className="img-fluid" src={imgSrc} alt={alt} />
        </div>
    )
}

export default ImageProfileView;