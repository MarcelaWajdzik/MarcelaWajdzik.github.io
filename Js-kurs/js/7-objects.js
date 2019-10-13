/* Definicja obiektu */
// 
let person = {
    name: "Zosia",
    surnmae: "Grzesiak",
    age: 32,
    isMarried: false,
    hobby: ['piłka nożna', 'Board games'],
    children: [{
        name: 'Zuzanna',
        age: 5
    }, {
        name: "liliana",
        age: 3
    }],
    supouse: {
        name: "Olga",
        age: 35
    },
    printSupouseName() {
        console.log(person.supouse.name)
        //  console.log(this.supouse.name) this czyli w tym obiekcie w ktorym aktualnie jestes

    },
    printHobbies() {

        person.hobby.forEach(function (elem) {
            console.log(elem);
        })
        // 
    }
};

console.log(person)

console.log(person.name)
// wyciagniecie imienia Zosi

console.log(person["surname"])
// wyciagniecie, wyciagamy naziwsko poprzez wstawienie ja w strongs i kwadratowe nawiasy

console.log(person.children[1].name);
/* 1 jestes w obikcie,wchodzimy do obiektu children. w tedy jestesmy tablica i wyciagamy 2 dziecko pprzez index czyli 1 . gdy to wyciagniemy to jestesmy w obiekcie wiec wyciagamy znowu dane popezez age */
console.log(person.supouse.age);

person.printSupouseName();
// obiekcie person wywyołaj metode(funkcji) printSupouseName

person.printHobbies();

person.city = "kraków";
// dodanie klucza i przypisanie mu wartosci i dodanie do obiektu person

console.log(person);