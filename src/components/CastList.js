import React from 'react';

import CastCard from './cards/CastCard';

import '../css/cast-list.css'

const CastList = (props) => {

    const renderCast = (cast) => {
        cast = cast.slice().sort(compare)
        return cast.map(c => {
            return (
                <CastCard castMember={c} key={c.person.name} />
            )
        })
    }
    
    return (
        <div>
            <h2>Cast</h2>
            <hr />
            <div className="cast-list">
                {renderCast(props.cast)}
            </div>
        </div>
    )
}

function compare( a, b ) {
    if ( a.billing < b.billing ){
        return -1;
    }
    if ( a.billing > b.billing ){
        return 1;
    }
    return 0;
}


export default CastList;