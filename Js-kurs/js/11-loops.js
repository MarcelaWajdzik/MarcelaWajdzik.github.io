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
    console.log(`${index +1}, ${element}`);

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