'use strict';

app.controllers.controller('SearchController',['$scope','SearchManager', function ($scope, SearchManager){

	$scope.launchSearch = function(){

		$scope.items = [];

		var request = SearchManager.search($scope.term);
		request.then(function (response){
			angular.forEach(response.data.items, function(value, key){
				$scope.items.push(value);
			});
		});
	};
}]);