let express = require('express');
let app = express();


app.use("/public",express.static(__dirname+"/public"));

app.use(function(req,res,next){
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next()
})

app.get('/json', function(req, res){
  let myMessage;
  const helloJSON = 'Hello json';
  if(process.env.MESSAGE_STYLE=='uppercase'){
    myMessage = helloJSON.toUpperCase();
  }
  else{
    myMessage = helloJSON;
  }
  const parseData = {"message":myMessage};
  res.json(parseData);
})
app.get('/', function(req,res){
  res.sendFile(__dirname+'/views/index.html');
});






























 module.exports = app;
