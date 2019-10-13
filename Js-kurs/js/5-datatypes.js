/* Typy proste */
/* TYp number */
let number = 10;
console.log(number);

let realNumber = -2.45;
console.log(realNumber);

/* Typ łancuchowy */
let name = "Marcelina's ";
console.log(name);

//konkatenacja - łaczenie stringów
let connectString = 'Adam' + " " + "Wajdzik";
console.log(connectString);
let newMessage = "Uzytkonwik" + connectString + "jest zalogowany";
// interpolacja stringów
let age = 32;


let anotherMessage = `Użytkownik ${connectString} ma ${age} lata`;
console.log(anotherMessage);

// Boolean
let isMature = true;
console.log(isMature);

if (isMature) {
    console.log("jest pelnoletni");

} else {
    console.log("jest niepelnoletni");
}


/* Typy specjalne */
console.log(null);
console.log(undefined);

// Sprawdzanie typy
console.log(typeof name);
console.log(typeof typeof isMature);
// ismature jest boolean ale wartosc boolean jest fals czyli jest stringiem wiec wyrzuca strning

/* CZemu JS  jest dziwny */

console.log("2" + 2);
// zamienia number na stringa
// 
console.log("2" - 2);
// zamienia stringa na number
console.log(2 - undefined);
// wyjdzie Nan bo undefined jest teoretycznie liczba
console.log(typeof NaN);
// wyjdzie ze to jest liczba
console.log(2 / 0);
console.log(typeof Infinity);