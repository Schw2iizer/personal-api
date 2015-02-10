var app = angular.module("Personal", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: "Home/home.html",
			controller: "homeController",
			resolve: {
				myName: function(mainService) {
					return mainService.getName();
				}
			}
		})
		.when('/me', {
			templateUrl: "me/me.html",
			controller: "meController"
		})
		.when('/skills', {
			templateUrl: "skills/skills.html",
			controller: "skillsController"
		})
		.otherwise({ redirectTo: '/' })

})		