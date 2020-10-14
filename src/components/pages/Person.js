import React from 'react';

import '../../css/pages/page.css'

const Person = (props) => {
    console.log("Person ID:", props.match.params.id)

    return (
        <div className="container-md page">
            <h1>Person Page</h1>
        </div>
    )
}

export default Person;