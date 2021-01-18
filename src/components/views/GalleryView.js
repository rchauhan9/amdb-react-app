import React from 'react';

import DK from '../../img/dark-knight.jpg'

import '../../css/views/gallery-view.css'

const GalleryView = (props) => {
    return (
        <div className="row">
            <div className="column">
                <img src={DK} />
                <img src={DK} />
                <img src={DK} />
                <img src={DK} />
                <img src={DK} />
                <img src={DK} />
            </div>
            <div className="column even">
                <img src={DK} />
                <img src={DK} />
                <img src={DK} />
                <img src={DK} />
                <img src={DK} />
                <img src={DK} />
            </div>
            <div className="column">
                <img src={DK} />
                <img src={DK} />
                <img src={DK} />
                <img src={DK} />
                <img src={DK} />
                <img src={DK} />
            </div>
            <div className="column even">
                <img src={DK} />
                <img src={DK} />
                <img src={DK} />
                <img src={DK} />
                <img src={DK} />
                <img src={DK} />
            </div>
        </div>
    )
}

export default GalleryView;