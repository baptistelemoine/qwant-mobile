'use strict';

app.controllers.controller('SearchController',['$scope','SearchManager', function ($scope, SearchManager){

	SearchManager.setSource('news');
	$scope.search = SearchManager;

}]);