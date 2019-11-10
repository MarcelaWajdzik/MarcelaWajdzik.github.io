import React from 'react';

const Searchinput = props => {
    return <input type='text' onChange={props.setTextHandler} value={props.currentTextValue} />
}

export default Searchinput;