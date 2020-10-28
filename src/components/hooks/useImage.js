import {useEffect, useState} from "react";
import axios from "axios";
import Avatar from "../../img/person-avatar.png";

export const useImage = (imgSrc) => {
    const [signedUrl, setSignedUrl] = useState('')

    useEffect(() => {
        const getUrl = async () => {
            try {
                const response = await axios.get(imgSrc)
                setSignedUrl(response.data)
            } catch (e) {
                setSignedUrl(Avatar)
            }
        }
        getUrl()
    }, [imgSrc])

    return signedUrl
}