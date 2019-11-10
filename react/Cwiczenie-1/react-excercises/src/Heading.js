import React from 'react';

const Heading = props => {
    return <h2 className={props.nameClass}>{props.title}</h2>;
}

export default Heading;