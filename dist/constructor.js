"use strict";
class Animal {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name, breed);
    }
}
let d = new Dog("Tommy", "German shepard");
console.log(d.name);
