/* Operatory arytmetyczne */
console.log(10 / 5);


console.log(10 % 3);
// modulo zwraca roznice z dzielenia
let number = 5;
console.log(++number); //dodaj i zwroc
console.log(number); //teraz tu bedzie 6
console.log(number++); //zwroc w tym wypadku 6 i dodaj 1

/* Operatory przypisania */
let newNumber = 3;
newNumber += 5;

console.log(newNumber);

newNumber *= 5;
console.log(newNumber); // 8 razy 5 bo wczesniej newnumber przypisalismy mu 8

/* operatory porownania */
console.log(2 == 2);
console.log(2 != 2);

console.log("2" == 2);
console.log("2" === 2);

console.log(2 < 3);
console.log(2 < 2); //fals
console.log(2 <= 2); //true

/* Operatory logiczne */

console.log(2 == 2 && 2 != 3);
console.log(4 < 2 && 2 != 3);


console.log(2 == 2 || 2 != 3); // jedno ma byc prawda
console.log(2 == 2 || 2 == 3); // to nie prawda obra falszywe


console.log(!(2 == 2)); //wyjdzie fałsz, ! odwraca wartosc 

console.log(!(2 == 2)); //wyjdzie fałsz, ! odwraca wartosc 

/* Operator warunkowy */
let age = 32;
let matueInfo = (age >= 18) ? "jest pełnoletni" : 'jest niepełnoletni'; // 1 wartosc zawsze odpowiada za to co siepokaze gdy jest prawda
console.log(matueInfo);