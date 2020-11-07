import React from "react";

import '../../css/views/main-header-view.css'

const MainHeaderView = ({mainHeader, subHeader}) => {
    const renderHeaders = (mainHeader, subHeader) => {
        if (subHeader) {
            return (
                <h1 className="mainHeader">
                    {mainHeader}
                    <span className="subHeader">{" " + subHeader}</span>
                </h1>
            )
        } else {
            return (
                <h1 className="mainHeader">
                    {mainHeader}
                </h1>
            )
        }
    }

    return (
        <div>
            {renderHeaders(mainHeader, subHeader)}
            <br />
        </div>
    )
}

export default MainHeaderView;