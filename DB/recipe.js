var db = require('config.js');
var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
  visits: Number, 
  link: String,
  title: String,
  picURL: String
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;