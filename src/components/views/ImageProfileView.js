import React, {useEffect, useState} from "react";
import axios from 'axios';

import { PRESIGNED_URLS_TITLE } from "../../constants/constants";

import '../../css/views/image-profile-view.css'

const ImageProfileView = ({src, alt}) => {

    const [signedUrl, setSignedUrl] = useState('')

    useEffect(() => {
        console.log("ImageProfileView Rendered")
        const getUrl = async () => {
            const response = await axios.get(PRESIGNED_URLS_TITLE + src)
            setSignedUrl(response.data)
        }
        getUrl()
    }, [src])

    return (
        <div className="img-container">
            <img className="img-fluid" src={signedUrl} alt={alt} />
        </div>
    )
}

export default ImageProfileView;