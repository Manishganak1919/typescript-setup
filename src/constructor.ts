class Animal {
  name: string;
  breed: string;
  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }
}
class Dog extends Animal {
  constructor(name: string, breed: string) {
    super(name, breed);
  }
}
let d = new Dog("Tommy", "German shepard");
console.log(d.name);
