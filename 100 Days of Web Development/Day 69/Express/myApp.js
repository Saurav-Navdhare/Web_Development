const Express = require('Express'); // Import Express
const app = Express();  // create an instance of Express app
const port = 3000; // port to listen on
app.get('/', (req, res) => res.send('Hello World!'));   // GET Will serve the string Hello World! on the root route
app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // Listens on port 3000 and prints to console
