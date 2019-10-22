/* petla for */
for (let i = 0; i <= 50; i++) {
    console.log(i);
}

for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }

}

/* metoda forEach */
let name = ["Adam", "Zosia", "Kamila", "Jerzy"];

name.forEach(function (element, index) { //dla kazddego elemntu tablicy w consoli wydrukuj testmetoda wyłacznie dla tablic
    console.log(users.pracownicy.pracownicy.fri[i]);

});
/* For in */
let person = {
    id: 1,
    name: 'Kasia',
    surname: "wjdzia"
}


for (let key in person) {
    console.log(key); //zwroci nazwy kluczy
    console.log(person[key]); //[key] wyciagamy stringa czyli wartosc przypisana do key

}

/* petli while */
let randomNumber = parseInt(Math.random() * 10); //parsetIn wyrzuca liczbe całkowita
console.log(randomNumber);


while (randomNumber < 5) {
    console.log(randomNumber);
    randomNumber = parseInt(Math.random() * 10);

}

do {
    console.log(randomNumber);
    randomNumber = parseInt(Math.random() * 10);
} while (randomNumber < 5)

/* Instrukcja break */
for (let i = 0; i < 10000; i++) {
    console.log(i);
    if (i > 100) { // if (i > 100) break;
        break;
    }
}

/* instrukcja continue */

for (let i = 0; i < 100; i++) {
    if (i % 4 !== 0) { // gdy i /4 daje reszta rowna zero to warunek nei jest spełniony i przerywa wiec wyswietla w consoli, gdy reszta nie jest rowna od zera to jest prawda i nastepuje przerwanie ale czesciowe bo wraca spowrotem do sprawdzaniawarunku
        //wszystkie liczby mniejsze od 100 podzielneprzez 4 bez reszty  i%4===0 
        continue;
    }
    console.log(i);
}