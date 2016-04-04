var app = angular.module('uglyBook', []);

app.controller('uglyController', function($scope, addRecipe){
  $scope.recipes = [
    {title: 'test', url: 'www.yay.com'},
    {title: 'test2', url: 'www.yay2.com'}
  ];
    // $scope.recipes = addRecipe.data
    $scope.addNew = addRecipe.addNew;
   console.log("Ugly Controller reporting for duty.");
});

app.factory('addRecipe', function(){
  var data = [{title: 'test', url: 'www.yay.com'}];
  var service = {};
  service.addNew = function(){
    this.recipes.push({title: this.title, url:this.link})
    this.title = '';
    this.link = '';
  }

  return service
  return data
})