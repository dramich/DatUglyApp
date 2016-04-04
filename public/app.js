var app = angular.module('uglyBook', []);

app.controller('uglyController', function($scope){
  $scope.recipes = 'Hello world';
   console.log("Ugly Controller reporting for duty.");
});