//API data taken from https://jsonplaceholder.typicode.com/users
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if(req.url=="/"){
        // res.write("Hello World");
        // res.end();   This could also work, but we can directly end our response using end and pass the argument as a string.
        res.end("Hello Saurav This Side");
    }
    else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/userapi.json`, "utf8", (err,data)=>{
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'application/json'});   //This is the header of the response which is a json file.
            res.end(data);
        });
        
    }
    else{
        //writeHead is used to set the status code of the response and the content type of the response. 
        res.writeHead(404, {"Content-Type": "text/html"}); //This is the header of the response which is a html file.
        res.end(`<h1>You are on ${req.url}\nKindly go to home page</h1>`);
    }
});
server.listen(8000, "127.0.0.1", () =>{
    console.log("listening on port 8000"); //listening on port 8000
});