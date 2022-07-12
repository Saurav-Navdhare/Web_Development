let express = require('express');
let app = express();


app.use("/public",express.static(__dirname+"/public"));

app.get('/json', function(req, res){
  const parseData = {"message": "Hello json"};
  res.json(parseData)
})
app.get('/', function(req,res){
  res.sendFile(__dirname+'/views/index.html');
});






























 module.exports = app;
