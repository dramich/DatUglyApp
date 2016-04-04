//var http = require('http');
var express = require('express')
var path = require('path');


var port=process.env.PORT || 8080; 

var app = express();
app.use(express.static(__dirname + "/public"));


// function handleRequest(request, response){
//     response.end('It Works!! Path Hit: ' + request.url);
// }

// var server = http.createServer(handleRequest);

// server.listen(PORT, function(){
//     console.log("Server listening on: http://localhost:%s", PORT);
// });

app.get('/', function(req, res){
  console.log('stuff')
  res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.listen(port);