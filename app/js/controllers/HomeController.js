'use strict';

app.controllers.controller('HomeController', ['$scope','$rootScope', function ($scope, $rootScope){
	$rootScope.isHomePage = true;
}]);