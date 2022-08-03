const fs = require("fs");
fs.mkdir("Second_NODE", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Directory created");
    }
});
fs.writeFile("Second_NODE/Second.txt", "Hey, This is my second time I am working with NODE, This time async", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File created");
    }
});
fs.appendFile("Second_NODE/Second.txt", "\nI am learning NODE", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File appended");
    }
})
fs.readFile("Second_NODE/Second.txt", "utf-8", (err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data)};
})
fs.rename("Second_NODE", "CRUD NODE", (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File renamed");
    }
})
fs.unlink("CRUD NODE/Second.txt", (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File deleted");
    }
})
fs.rmdir("CRUD NODE", (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Directory deleted");
    }
})

//Run this file in patches to see the output