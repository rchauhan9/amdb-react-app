import React from 'react';

import '../../css/views/h-scroll-view.css'

const HScrollView = (props) => {
    return (
        <div className="h-scroll-view">
            {props.children}
        </div>
    )
}

export default HScrollView;