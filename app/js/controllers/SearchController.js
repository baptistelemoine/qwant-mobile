'use strict';

app.controllers.controller('SearchController',[
	'$scope','SearchManager','$location', 'snapRemote', '$route', '$rootScope', function ($scope, SearchManager, $location, snapRemote, $route, $rootScope){

	$scope.term = $location.search().q;
	var sources = ['news','web','videos','shopping','social'];
	// var sources = ['news','videos'];
	SearchManager.setSource(sources.join(','));
	$scope.search = SearchManager;
	SearchManager.nextPage($scope.term);

	$rootScope.isHomePage = false;

	snapRemote.close();
		
}]);