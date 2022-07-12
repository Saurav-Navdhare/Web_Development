function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
// Only change code below this line
console.log(Dog.prototype.isPrototypeOf(beagle))
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-where-an-objects-prototype-comes-from