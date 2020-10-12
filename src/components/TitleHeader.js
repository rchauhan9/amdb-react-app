import React from 'react';

const TitleHeader = (props) => {
    return (
        <div>
            <h1>{props.title} ({props.released})</h1>
            <br />
        </div>
    )
}

export default TitleHeader;