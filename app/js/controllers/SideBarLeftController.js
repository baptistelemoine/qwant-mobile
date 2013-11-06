'use strict';


app.controllers.controller('SideBarLeftController', ['$scope','$location', function ($scope,$location){
	$scope.user = {
		'name':'Baptiste',
		'email':'hello@gmail.com'
	}

	$scope.defaultTerm = $location.$$search.q !== undefined ? $location.$$search.q : 'Rechercher';

	$scope.$on('$locationChangeSuccess', function (e){
		$scope.defaultTerm = $location.$$search.q !== undefined ? $location.$$search.q : 'Rechercher';
	});

	$scope.cb = {
		cb1:true
	};	
}]);