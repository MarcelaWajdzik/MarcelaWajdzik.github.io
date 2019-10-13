/* Classes */
// nazwe classy zaczynamy z duzej litery
class Car {
    // conctruktor - słowo kluczowe JS
    constructor(name, year) {
        this.name = name;
        // w tej clasie (this)
        // stwórz pole name w clasie car
        this.year = year;
        // this.year moze miec inna nazwe to sa nazwy ktore znajduja sie w construkcie ale przewaznie maja taka nazwe jak  parametry
    }
    printCarInfo() {
        console.log(`Samochód ${this.name} wyprodukowany w roku ${this.year}`)
    }
}
// audi A4 jest zmiena -name  w constructor - year -2016

let bugatti = new Car("bugatti veyron", 2012);
let audi = new Car("audi A4", 2012);

// instancja klasy -czyli obiekt skonstruowany na podstawie jakies klasy
// new.Car - nowy obiekt tej klasy Car
console.log(bugatti);
console.log(bugatti.name);

bugatti.printCarInfo();
audi.printCarInfo();