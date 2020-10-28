import React, {useEffect, useState} from "react";

import '../../css/views/image-profile-view.css'
import {useImage} from "../hooks/useImage";
import {PRESIGNED_URLS_TITLE} from "../../constants/constants";

const ImageProfileView = ({src, alt}) => {

    const imgSrc = useImage(PRESIGNED_URLS_TITLE + src)

    return (
        <div className="img-container">
            <img className="img-fluid" src={imgSrc} alt={alt} />
        </div>
    )
}

export default ImageProfileView;