let express = require('express');
let app = express();


app.use("/public",express.static(__dirname+"/public"));

app.get('/now', function(req,res,next){
  req.time = (new Date()).toString()
  next();
}, function (req, res){
  res.json({time:req.time});
})

app.get('/:word/echo', function(req,res){
  res.json({echo:req.params.word});
});

app.route('/name').get(function(req,res){
  console.log(req.query);
  res.json({name: `${req.query.first} ${req.query.last}`})
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
