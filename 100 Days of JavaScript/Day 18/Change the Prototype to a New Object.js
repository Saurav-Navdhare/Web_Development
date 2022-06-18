function Dog(name) {
    this.name = name;
  }
  
Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function(){console.log("Eating");},
  describe: function(){console.log(`My name is ${this.name}`)}
};
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/change-the-prototype-to-a-new-objects