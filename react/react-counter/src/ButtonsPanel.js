import React from 'react';
const ButtonsPanel = props => {
    return (
        <div className="buttonsPanel">
            <button onClick={props.addValue}>Add 1</button>
            <button onClick={() => props.resetValue(false)}>Reset</button>
            <button onClick={() => props.resetValue(true)}>Set 0</button>
            {/* zostosowalismy jedna metode ktore przyjmuja rozne paramtery i zastosowalismy ins.warunkkowa i coma sie dziac gdy jest false a co gdy jest true 
            props.resetValue(true) tak nie mozna bo od razu sie wywowała wiec japrzypisujemy do funkcji anonimowej */}
        </div >
    )
}
export default ButtonsPanel;