'use strict';

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newList = list.map((el, i) => {
    return el * 2
})
console.log(newList);

/* z funkcji mam trzeba cos zwrocic. metoda ta nie potrzebuje petli bo to co jest w ciele wykonuje na kazdym elemecie. gdy nei bd return to bedzie tablica z elementami nie zdefiniowanymi  */


const listNames = ["Marcela", 'Macius', "Kamilek", 'Wanda', "krysia"];
const listSurname = ["Wajdzia", 'Paluch', "Paluszek", 'Kazik', "Nowak"];
const fullNames = listNames.map((el, i) => {
    /*     debugger */
    // na tym pgroam sie zatrzyma pokazuje pod jaka wartosc jest pod dana zmienna w trakcie działa programu 
    return `${el} ${listSurname[i]}`
    // index po kazdej iteracji zwieksza sie o 1
})
console.log(fullNames);
// map zwraca zawsze tyle elementów ile miała piewotna tablica

// metoda filter ()


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// chcemy uzyskac elementy wieksze nzi 5.
// metoda ta rownież zwraca nowa tablice. któe moge byc krótsze niz pierwotna tablica

const moreThanFive = numbers.filter((el, i) => {
    return el > 5;
});
console.log(moreThanFive);


const color = ['red', 'green', 'blue', 'white', 'orange', 'yellow'];



const withR = color.filter(el => el.includes('r'))
// metoda includes sprawdza czy jest w strindu litera przyspiana jako element do tej metody

console.log(withR);