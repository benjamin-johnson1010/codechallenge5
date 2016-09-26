console.log('js sourced');

var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
      when("/home", {
        templateUrl: "/views/partials/home.html",
        controller: "homeController"
      }).
      when("/addHero", {
        templateUrl: "/views/partials/addHero.html",
        controller: "addHeroController"
      }).
      when("/displayHeroes", {
        templateUrl: "/views/partials/displayHeroes.html",
        controller: "displayHeroesController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);
