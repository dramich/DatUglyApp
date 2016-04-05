var db = require(__dirname + '/config.js');
var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
  visits: Number,
  link: String,
  title: String,
  picURL: String
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

// var data = {
//   visits: 0,
//   link: 'String',
//   title: 'String',
//   picURL: 'String'
// }

// Recipe.create(data, function( err, recipe){
//   if (err) {
//     console.err(err);
//   } else {
//     console.log('yay ' + recipe);
//   }
// })
