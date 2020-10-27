import React from 'react';

import '../../css/views/h-scroll-view.css'

const HScrollView = (props) => {
    return (
        <div className="list">
            {props.children}
        </div>
    )
}

export default HScrollView;