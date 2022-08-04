const myData = {
    name: "Saurav",
    age: 18,
    hobbies: ["coding", "finance", "cricket"],
};
//We can use JSON.stringify to convert the object to string and JSON.parse to convert the string to object
 
console.log(myData.name);
const myJSON = JSON.stringify(myData); //JSON stringify converts the object into a string
console.log(myJSON);
console.log("converted string to data object");
const myJSON2 = JSON.parse(myJSON); //JSON parse converts the string into an object
console.log(myJSON2);
console.log(myJSON2.name); //This will work
// console.log(myJSON.name) //This is returning undefined, this will not give appropriate value because name is not a property of myJSON