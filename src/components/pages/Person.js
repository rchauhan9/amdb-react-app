import React from 'react';

import Example from '../Example';
import PersonCard from '../cards/PersonCard';

const Person = (props) => {
    console.log("Person ID:", props.match.params.id)

    return (
        <div className="container-md">
            <h1>Person Page</h1>
            <Example urlID={props.match.params.id} />
            <PersonCard />
        </div>
    )
}

export default Person;