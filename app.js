//var http = require('http');
var express = require('express')
var path = require('path');
// required for database stuff
var db = require(__dirname + '/DB/config.js');
var recipe = require(__dirname + '/DB/recipe.js');
var mongoose = require('mongoose');

// sets the port to heroku or local
var port=process.env.PORT || 8080; 


var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


app.get('/data', function(req, res){
  console.log('incoming request');
  recipe.find({}, function(err, results){
    if (err){
      res.send(err);
    } else {
      //console.log(results);
      res.send(results)
    }
  })
  //res.sendFile(path.join(__dirname + '/public'))
  //res.end('Hello')
});

app.post('/data', function(req, res){
  recipe.create(req.body, function( err, recipe){
    if (err) {
      res.send(err);
      res.end();
    } else {
      //console.log('yay ' + recipe);
      res.send(recipe);
      res.end()
    }
  })

  // console.log('request recieved')
  // res.end('end')
})

app.listen(port);

