'use strict';


app.controllers.controller('SideBarLeftController', ['$scope','$window','snapRemote', '$location', function ($scope, $window, snapRemote, $location){
	$scope.user = {
		'name':'Baptiste',
		'email':'hello@gmail.com'
	}

	$scope.defaultTerm = $location.$$search.q !== undefined ? $location.$$search.q : 'Rechercher';

	$scope.$on('$locationChangeSuccess', function (e){
		$scope.defaultTerm = $location.$$search.q !== undefined ? $location.$$search.q : 'Rechercher';
	});

}]);