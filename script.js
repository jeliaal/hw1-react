// Assignment #1

function Car(pMake, pModel, pYear) {
    this.make = pMake
    this.model = pModel
    this.year = pYear
    this.getCarInfo = function() {
        return `${this.make} Model ${this.model} released in ${this.year}`
    }
}

function Person(pName, pAge, pCars) {
    this.name = pName
    this.age = pAge
    this.cars = pCars
}
let tomsCar = new Car("Tesla", "S", 2015)
let tom = new Person("Tom", 24, tomsCar)
document.writeln(`${tom.name} is ${tom.age} and drives ${tom.cars.getCarInfo()} / / / `)
document.write(`${tom.name} is ${tom.age} and drives ${tomsCar.getCarInfo()} / / / /`)
let personCar = new Car("Honda", "Civic", 1997)
let person = new Person("Alex", 22, personCar)
document.writeln(`${person.name} is ${person.age} and drives ${person.cars.getCarInfo()} / / / `)