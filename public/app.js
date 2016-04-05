var app = angular.module('uglyBook', []);

app.controller('uglyController', function($scope, recipeFact){
  // $scope.recipes = [
  //   {title: 'test', url: 'www.yay.com'},
  //   {title: 'test2', url: 'www.yay2.com'}
  // ];
    $scope.getAll = recipeFact.getAll;
    $scope.recipes = recipeFact.data;
    $scope.addNew = recipeFact.addNew;
    $scope.removeRecipe = recipeFact.removeRecipe;
    console.log("Ugly Controller reporting for duty.");
    var init = function(){
      $scope.getAll();
      console.log('controller '+ $scope.recipes)
    }
    init();
});

app.factory('recipeFact', function($http){
  var service = {};
  
  service.data = [];

  service.getAll = function(){
    return $http({
      method: 'GET',
      url: '/data'
    })
    .then(function(resp){
      console.log(resp.data)
      service.data = resp.data
    })
  }

  service.removeRecipe = function(recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  service.addNew = function(){
    var data = {
      visits: 0,
      link: this.link,
      title: this.title,
      picURL: 'NA'
    }

    return $http({
      method: 'POST',
      url: '/data',
      data: data
    })
    .then(function(resp){
      console.log(resp);
      return resp.data;
    });
  };
  return service
})