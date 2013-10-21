'use strict';

app.controllers.controller('SearchController',[
	'$scope','SearchManager','$location', function ($scope, SearchManager, $location){

	$scope.term = $location.search().q;
	SearchManager.setSource('news');
	$scope.search = SearchManager;
	SearchManager.nextPage($scope.term);

}]);