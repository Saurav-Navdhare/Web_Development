require('dotenv').config();
const express = require('express');
const cors = require('cors');
const isUrl = require('is-url');
const app = express();
const bodyParser = require('body-parser');
// Basic Configuration
const port = process.env.PORT || 3000;

let counter = 0;

let shortnedurl = {};

app.use(cors());

app.use(bodyParser.urlencoded({extended : false}));

app.use('/public', express.static(`${process.cwd()}/public`));

app.post("/api/shorturl", function(req,res){
  if(!isUrl(req.body.url)){
    res.send({ error: 'invalid url' })
    return;
  };
  counter+=1;
  shortnedurl[counter]=req.body.url;  
  res.send({original_url: req.body.url, short_url:counter});
  return;
})

app.get('/api/shorturl/:id', function(req,res){
  let id = req.params.id;
  let url = shortnedurl[id];
  res.redirect(url);  
  return;
})

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});



app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
