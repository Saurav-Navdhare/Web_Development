//We can create our own server using the http module of Node.
const http = require("http"); //importing the http module
const server = http.createServer((req, res) => {
    if(req.url=="/"){
        // res.write("Hello World");
        // res.end();   This could also work, but we can directly end our response using end and pass the argument as a string.
        res.end("Hello Saurav This Side");
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end(`<h1>You are on ${req.url}\nKindly go to home page</h1>`);
    }
});
server.listen(8000, "127.0.0.1", () =>{
    console.log("listening on port 8000"); //listening on port 8000
});