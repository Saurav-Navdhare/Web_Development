const math = require('./export'); //importing file, as it is not inbuilt module, so use relative path to access it
console.log(math); //returns the object containing the functions
console.log(math.add(10,20));   //Accessing exported functions using name.funcname 
console.log(math.sub(10,20));
console.log(math.mul(10,20));
console.log(math.div(10,20));
console.log(math.mod(10,20));
console.log(math.exp1(10,2)); //Using way 2 of exporting, changed the way function is called
console.log(math.PI); //Accessing exported variables using name.variablename