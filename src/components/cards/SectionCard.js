import React from "react";

import '../../css/cards/section-card.css'

const SectionCard = (props) => {
    return (
        <div className="section-card">
            {props.children}
        </div>
    )
}

export default SectionCard;