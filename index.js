
/**
*** Author: Gustavo Iha
**/

var express = require('express');
var app = express();

var bodyParser = require('body-parser');


/**
*** Configuring server
**/

app.use(express.static('public'))

app.use(bodyParser.json());

app.listen(port_number = process.env.PORT || 3000, function(){
  console.log('Server running!');
});


/**
*** Get requests
**/

app.get('/', function(request, response){
  response.sendFile(__dirname + '/views/app.html');
});

app.get('/teste', function(request, response){

  response.writeHead(200, {"Content-Type": "application/json"});

  var json = JSON.stringify({
    name: "Gustavo Iha",
    age: 21
  });

  response.end(json);

});

/**
*** Post requests
**/

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
  response.send(request.body);    // echo the result back
});
