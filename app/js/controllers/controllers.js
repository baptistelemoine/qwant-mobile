'use strict';

app.controllers.controller('SearchController',['$scope','SearchManager', function ($scope, SearchManager){

	$scope.search = SearchManager;

}]);