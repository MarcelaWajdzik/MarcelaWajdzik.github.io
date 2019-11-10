import React from 'react'; /*  opcja 1 */
/*import React, {Component} from 'react';   opcja 2  i w tedy  class Counter extends Component */
import ButtonsPanel from './ButtonsPanel';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        /* dziedziczymy wartosc propos z klasy component */
        this.state = {
            counterValue: this.props.initValue
        }/* to sie musi tak nazywac bo to jest przypisane od górnie i dziedziczone z classy component state
        
        this.props.initValue bo pobieramy wartosc poczatkowa jego  atrubutu*/
    }

    addCounterValue = () => {
        this.setState(prevState => {
            return ({ counterValue: prevState.counterValue + 1 })
            /*  z pierwotnego stanu wez wartosc i zwieksz ja o jeden   gdy do setState jako pierwszy parametr przekazemy cos to on bd przechowywał pierwotnoa wartosc*/
        })
        /* prevState pokazuje pierwtny stan */
        /* ({ counterValue: 12 })  this odnosi sie do  classy OCmponent. moze miec 2 rodzaje parametrów obiekt lub funkcje 
        obiekt pozwalanadpisac aktualny stan*/

    }
    resetCounter = (reset) => {
        if (reset) {
            this.setState({ counterValue: 0 })
        }
        else {
            this.setState({ counterValue: this.props.initValue })
        }
    }


    render() {
        /* render wyswietla w przegladarce wieczeby cos wyswietlic musi byc cos doniego zwrocone tak jak w function */
        return (
            <div className='counter'> {/* dodanie klasy className */}
                Licznik: {this.state.counterValue}

                {/* to wszystko co jest pozniej przeniselismy do buttons panel */}
                {/*  <button onClick={() => this.addCounterValue()}> */}
                {/*   <button onClick={ this.addCounterValue}> efekt ten sam, po clicku jest przypisana ta wartosc funkcji czyli ja wywoluje. mozna tak robic gdy nei przekujazemy do funkcji parametrów */}

                {/*  </button> */}


                <ButtonsPanel
                    addValue={this.addCounterValue}
                    resetValue={this.resetCounter}
                />


                {/* onClick - wywołanie zdarzenia na click */}
            </div >
        );
        /* przez propst wyciagamy wartosc przypisna do atrybutu . propst wyswietla w konsoli obiekt i zeby poprac jej wartosc trzeba pobrac klucz do wartosci ktora chcemy wyswietlic */
    }
}

export default Counter;