import React from "react";

import '../../css/views/image-profile-view.css'
import {useImage} from "../hooks/useImage";

const ImageProfileView = ({src, alt}) => {

    const imgSrc = useImage(src)

    return (
        <div className="image-profile-view">
            <img src={imgSrc} alt={alt} />
        </div>
    )
}

export default ImageProfileView;