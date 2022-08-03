//CRUD OPERATIONS USING NODE JS

const fs = require("fs");
fs.mkdirSync("First_NODE");
fs.writeFileSync("First_NODE/First.txt", "Hey, This is my first time I am working with NODE"); //Will overwrite the file if it already exists
fs.appendFileSync("First_NODE/First.txt", "\nI am learning NODE");
const myData = fs.readFileSync("First_NODE/First.txt", "utf8");
const myBuffer = fs.readFileSync("First_NODE/First.txt");   //Will return a buffer object: only available in Node.js
console.log(myData);
console.log(myBuffer);
console.log(myBuffer.toString()); //Will return a string representation of the buffer object
fs.renameSync("First_NODE", "CRUD NODE"); //Renames file or directory
fs.unlinkSync("CRUD NODE/First.txt"); //Deletes file
// fs.unlinkSync("CRUD NODE"); //Will not Delete directory
fs.rmdirSync("CRUD NODE"); //Will delete directory
