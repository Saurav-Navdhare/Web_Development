var express = require('express');
var app = express();

 let messageObject = {"message": "Hello json"};
app.get('/json', function(req, res) {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
     var u_=JSON.parse(JSON.stringify(messageObject ));
     u_.message=u_.message.toUpperCase();
     return res.json(u_);
  } else {
      return res.json(messageObject);
  }
});
 
 module.exports = app;