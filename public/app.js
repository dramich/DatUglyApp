var app = angular.module('uglyBook', []);

app.controller('uglyController', function($scope, recipeFact){
  $scope.recipes = [
    {title: 'test', url: 'www.yay.com'},
    {title: 'test2', url: 'www.yay2.com'}
  ];
    // $scope.recipes = recipeFact.data
    $scope.addNew = recipeFact.addNew;
    $scope.removeRecipe = recipeFact.removeRecipe
   console.log("Ugly Controller reporting for duty.");
});

app.factory('recipeFact', function(){
  var data = [{title: 'test', url: 'www.yay.com'}];
  var service = {};
  service.addNew = function(){
    this.recipes.push({title: this.title, url:this.link})
    this.title = '';
    this.link = '';
  }

  service.removeRecipe = function(recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  return service
  return data
})