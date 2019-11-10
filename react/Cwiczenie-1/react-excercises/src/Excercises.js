import React from 'react';
import Heading from './Heading';
import Subheading from './Subheading';
import Searchinput from './Searchinput';
import ButtonsPanell from './ButtonsPanell';


class Excercises extends React.Component {
    constructor() {
        super();
        this.state = {
            classCss: 'pink',
            currentText: "default text"
        };
    };

    changeNameClass = classValue => {
        this.setState({
            classCss: classValue
            /* classValue parametr funkcji changeNameClass */
        })
    };

    setText = (e) => {
        this.setState({ currentText: e.target.value })
        /* wywołuje  obiekt który wywołuje zdarzenie */
    };

    render() {
        return (
            <div className='excercises'>
                <Heading title={this.state.currentText} nameClass={this.state.classCss} />
                <ButtonsPanell buttonsFunction={this.changeNameClass} />
                <Searchinput setTextHandler={this.setText} currentTextValue={this.state.currentText} />
                < Heading title='Podtytuł' nameClass='green' />
                <Heading title='Podtytuł' nameClass='red' />
                <Subheading title='O mnie' nameClass='blue' />
                <Subheading title='O mnie' nameClass='blue' />
                <Subheading title='O mnie' nameClass='blue' />
                <Subheading title='O mnie' nameClass='blue' />
                <Subheading title='O mnie' nameClass='blue' />
                <Subheading title='fnsjkfns' nameClass='blue' />
                <Subheading title='O mnie' nameClass='blue' />
                <Subheading title='O mnie' nameClass='blue' />
            </div>
        );
    };
};

export default Excercises;