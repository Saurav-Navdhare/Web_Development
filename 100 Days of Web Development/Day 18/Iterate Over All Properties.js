function Dog(name) {
    this.name = name;
  }
  
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
  
// Only change code below this line
for(let i in beagle){
  if(beagle.hasOwnProperty(i)){
    ownProps.push(i)
  }
  else{
    prototypeProps.push(i)
  }
}
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/iterate-over-all-properties