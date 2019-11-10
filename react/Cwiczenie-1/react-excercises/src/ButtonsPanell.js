import React from 'react';

const ButtonsPanell = props => {
    return (
        <div className="buttonsPanel">
            <button onClick={() => props.buttonsFunction('red')}>red</button>
            <button onClick={() => props.buttonsFunction('green')}>green</button>
            <button onClick={() => props.buttonsFunction('blue')}>bule</button>
            <button onClick={() => props.buttonsFunction('pink')}>pink</button>
        </div >
    )
}
export default ButtonsPanell;