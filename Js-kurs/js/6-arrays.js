/* Definicja tablic */
let names = ["Adam", "Zosia", "Kamila", "Jerzy"];
let firstElement = names[1];
// wyciagniecie 2 elementu z tablicy

console.log(firstElement);
names[3] = "Tadeusz";
console.log(names);

names.push('kasia');
console.log(names);
names.pop('kasia');
console.log(names);
// wyciaganie długosci tablicy
console.log(names.length);

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log(names.join(" "))
/* w nawiasach  dajemy znak ktory chcemy aby nam przedzieła te imiona w tym momencie jest spacja, gdy nie chcemy nic do dajemy otwarcie i zamkniecie stringa bez spacji w srodku  parametrem join  jest string*/
console.log(names.reverse());
// owracja  kolejnosc

console.log(names.sort())
// sorotwanie np. alfabetyczne

let newArray = [1, "Adam", false, null, ['Kasia', "Stefańska"], {
    name: "Lukasz",
    surname: "Badocha"
}];

console.log(newArray[4][1]);
// 1 wyciagnelismy tablice ktroa znajduje siena 4 indexie a nastepnie z niej wyciagamy nazwisko ktore znajude sie na 1 indexie nowej tablicy