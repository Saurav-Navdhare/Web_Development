function Dog(name) {
    this.name = name;
  }
  
// Only change code below this line
function joinDogFraternity(candidate) {
  return candidate.constructor===Dog;
}
//freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-constructor-property