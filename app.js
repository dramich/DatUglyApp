//var http = require('http');
var express = require('express')
var path = require('path');
var db = require('./DB/config.js')

var port=process.env.PORT || 8080; 

var app = express();
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
  console.log('stuff');
  res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.listen(port);

