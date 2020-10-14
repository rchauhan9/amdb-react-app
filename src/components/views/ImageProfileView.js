import React from "react";

import '../../css/views/image-profile-view.css'

const ImageProfileView = ({src, alt}) => {
    return (
        <div className="img-container">
            <img className="img-fluid" src={src} alt={alt} />
        </div>
    )
}

export default ImageProfileView;