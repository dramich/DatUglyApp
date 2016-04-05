var app = angular.module('uglyBook', []);

app.controller('uglyController', function($scope, recipeFact){
  // $scope.recipes = [
  //   {title: 'test', url: 'www.yay.com'},
  //   {title: 'test2', url: 'www.yay2.com'}
  // ];
    $scope.getAll = function (){
      return recipeFact.getAll()
      .then(function(data){
        $scope.recipes = data
      })
      .catch(function(err){
        console.err(err);
      })
    }

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
  
  service.data = [{title: 'test', url: 'www.yay.com'}];

  service.getAll = function(){
    return $http({
      method: 'GET',
      url: '/data'
    })
    .then(function(resp){
      console.log(resp.data)
      return resp.data
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