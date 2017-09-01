
/**
*** Author: Gustavo Iha
**/

var express = require('express');
var app = express();

var bodyParser = require('body-parser');


/**
*** Configuring server
**/

app.use(bodyParser.json());

app.listen(port_number = process.env.PORT || 3000, function(){
  console.log('Server running!');
});


/**
*** Get requests
**/

app.get('/', function(request, response){
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/gustavo-iha', function(request, response){
  response.sendFile(__dirname + '/views/gustavo-iha.html');
});
