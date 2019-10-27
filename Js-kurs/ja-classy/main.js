class Person {
    constructor(name, age) {
        this.name = name; //this odpowiada w tym momencie za nazwe classy np Person
        this.age = age;
    }
    sayHi() {
        return `Hi, I'm ${this.name}, i'm ${this.age}`

    }
};

const Tom = new Person('Tom', 20) //obiekt
const Anna = new Person('anna', 29) //obiekt
console.log(Tom);
console.log(Anna.sayHi()); //w consoli wloguje od razu funkcje 

// dziedziczenie

class Developer extends Person {
    constructor(name, age, language) {
        super(name, age) // podajemy argumenty które mamy dziedziczyc z klacy Person
        this.language = language;
    }

    sayWhoIm() {
        return ` Hi, I'm ${this.name},i'm ${this.age} and i'm ${this.language} programmer`
    }
}

const newDeveloper = new Developer('Zosia', 13, 'JavaScript')
console.log(newDeveloper.sayWhoIm());