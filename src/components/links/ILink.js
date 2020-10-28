import React from 'react';
import {Link} from "react-router-dom";

const ILink = (props) => { /* ILink = 'Invisible Link' */
    return (
        <Link to={props.to} style={{ height: '100%', width: '100%', textDecoration: 'none'}}>
            {props.children}
        </Link>
    )
}

export default ILink;