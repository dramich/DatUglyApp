var app = angular.module('uglyBook', []);

app.controller('uglyController', function($scope, recipeFact){
  // $scope.recipes = [
  //   {title: 'test', url: 'www.yay.com'},
  //   {title: 'test2', url: 'www.yay2.com'}
  // ];
    $scope.getAll = function (){
       recipeFact.getAll()
      .then(function(data){
        $scope.recipes = data
      })
      .catch(function(err){
        console.log(err);
      })
    }

    $scope.addNew = function(){
      var data = {
      visits: 0,
      link: $scope.link,
      title: $scope.title,
      picURL: 'NA'
    }
      recipeFact.addNew(data)
      .then(function(){
        $scope.link = '';
        $scope.title = '';
        $scope.getAll();
      })
      .catch(function(err){
        console.log(err);
      })
    }


    $scope.removeRecipe = function(recipeID){
      console.log(recipeID);
      recipeFact.removeRecipe(recipeID)
      .then(function(){
        $scope.getAll();
      })
      .catch(function(err){
        console.log(err);
      })
    }
    
    console.log("Ugly Controller reporting for duty.");
    
    var init = function(){
      $scope.getAll();
    }
    init();
});

app.factory('recipeFact', function($http){
  var service = {};
  //service.data = [{title: 'test', url: 'www.yay.com'}];
  service.getAll = function(){
    return $http({
      method: 'GET',
      url: '/data'
    })
    .then(function(resp){
      //console.log(resp.data)
      return resp.data
    })
  }

  service.removeRecipe = function(recipeID){
    //Recipe.find({ id:recipeID }).remove().exec()
      console.log('fact ID ' + recipeID)
     return $http({
      method: 'PUT',
      url: '/data',
      data: {recipeID : recipeID}
    })
    .then(function(resp){
      return resp.data
    })
    .catch(function(err){
      console.log(err);
    })
    //console.log('into the factory')
  }

  service.addNew = function(data){
    return $http({
      method: 'POST',
      url: '/data',
      data: data
    })
    .then(function(resp){
      //console.log(resp);
      return resp.data;
    });
  };

  return service
})