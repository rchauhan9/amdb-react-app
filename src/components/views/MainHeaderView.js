import React from "react";

import '../../css/views/main-header-view.css'

const MainHeaderView = ({mainHeader, subHeader}) => {
    return (
        <div>
            <h1 className="mainHeader">{mainHeader} <span className="subHeader">{subHeader}</span></h1>
            <br />
        </div>
    )
}

export default MainHeaderView;