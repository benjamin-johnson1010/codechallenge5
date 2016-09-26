//create function to send new hero information to the server
myApp.controller('addHeroController', ['$scope', '$http', function($scope, $http){
  console.log('addHeroController');
  $scope.newHero = function(){
    console.log('in newHero');
    //create object to pass to server of hero info
    var newInput={
      alias: $scope.alias,
      first_name: $scope.first_name,
      last_name: $scope.last_name,
      city: $scope.city,
      power_name: $scope.power_name
    };
    //set input fields back to blank
    $scope.alias = null;
    $scope.first_name = null;
    $scope.last_name = null;
    $scope.city = null;
    $scope.power_name = null;
   //send newInput data to server
   $http({
      method: 'POST',
      url: '/hero',
      data: newInput
    }).then(function(response){
      console.log('this is from the server', response);
//display the new hero on DOM
$scope.displayAlias = 'Alias: ' + response.data.alias;
$scope.displayName = 'Name: ' + response.data.first_name + ' ' + response.data.last_name;
$scope.displayCity = 'Location: ' + response.data.city;
$scope.displayPower = 'Power: ' + response.data.power_name;
    });
  };
}]);
