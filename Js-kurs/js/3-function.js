/* Podstawowy sposobdefiniowania funkcji */

function printInfo() {
    console.log("Funkcja sie wykonała");
}
printInfo();
printInfo();
printInfo();
// funkcja wykona sie 3 razy


/* Wyrazenia funkcyjne */

const printNewInfo = function () {
    console.log("wyrażenie funkcyjne sie wykonało");
}
printNewInfo();

/* Fuknkcja z parametrami */
4

function addNumber(numberOne, numberTwo) {
    let result = numberOne + numberTwo;
    console.log(result);
}
addNumber(5, 4);
addNumber(5, 6);
addNumber(25, 34);
addNumber(655, 3444);

/* Funkcja ktora zwroci wynik mnozenia 3 liczb */
function
multiplication(numberJeden, numberDwa, NumberTrzy) {
    let multi = numberJeden * numberDwa * NumberTrzy;
    // console.log(multi);
    return multi;
    // return numberJeden*numberDwa*NumberTrzy to jest to samo tylkobez przypisanej zmiennej
    // gdyby nie było zwrotu wartosci funkcji to w consoli wyswietli sie wartosc niezdefiniowana
}

multiplication(6, 5, 4);
let multiplicationResult = multiplication(6, 5, 4);
console.log(multiplicationResult);
// przypisany result z funkcji multiplication


/* funkcjie strzałkowe */

const connectName = (fname, sname) => {
    let connectNames = fname + ' ' + sname;
    console.log(connectNames);
}
connectName("Adam", 'Nowacki');


// funkcja z jednym parametrem
const square = a => a * a;
console.log(square(4));
// wywołanie i przypisanie wartosci paramteru