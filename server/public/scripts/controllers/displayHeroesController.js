myApp.controller('displayHeroesController', ["$scope", '$http', function($scope, $http){
console.log('in displayHeroesController');
//get the pets to display on DOM
    $scope.displayPet = function(){
    console.log('in displayHero');
      //call to get the pets in the database
     $http({
        method: 'GET',
        url: '/hero',
      }).then(function(response){
        $scope.allHeroes = response.data;
        console.log('this is from the server', $scope.allHeroes);

      });
    };
  }]);
