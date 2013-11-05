'use strict';


app.controllers.controller('SideBarLeftController', ['$scope','$window','snapRemote', '$location', function ($scope, $window, snapRemote, $location){
	$scope.user = {
		'name':'Baptiste Lemoine',
		'email':'baptiste.lemoine@gmail.com'
	}

	$scope.term = $location.$$search.q;
}]);