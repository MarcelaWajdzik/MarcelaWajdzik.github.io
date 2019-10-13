/*  */
const pi = Math.PI;
console.log(pi);

const e = Math.E;
// math obiekt bo pozniej jest kropka
console.log(e);

/* Metody */
let power = Math.pow(2, 16)
// pow to metoda boma (), 2 do potegi 16
console.log(power);

let randomNumber = Math.random();
console.log(randomNumber);

/* Napisz funkcje, która policzy pole koła o zadanym promieniu i zwroci wynik Pi rkwadrat */

function area(r) {
    return Math.PI * Math.pow(r, 2);
}

console.log(area(4));