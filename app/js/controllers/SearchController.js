'use strict';

app.controllers.controller('SearchController',[
	'$scope','SearchManager','$location', 'snapRemote', '$route', '$rootScope', function ($scope, SearchManager, $location, snapRemote, $route, $rootScope){

	$scope.term = $location.search().q;
	$scope.search = SearchManager;

	$scope.$on('$locationChangeSuccess', function (e){
		SearchManager.currentPage = 1;
		SearchManager.items = [];
	});

	SearchManager.source = $location.$$search.source;
	SearchManager.nextPage($scope.term);

	$rootScope.isHomePage = false;

	snapRemote.close();

	// !!!! REMOVE ON PROD
	snapRemote.getSnapper().then(function (snapper){
		snapper.settings({
			minPosition:-290
		});
	});

	$scope.isActive = false;

	snapRemote.getSnapper().then(function (snapper){
		snapper.on('close', function (event){
			$scope.$apply(function(){$scope.isActive = false;})
		});
		snapper.on('open', function (event){
			$scope.isActive = true;
		});
		snapper.on('drag', function (event){
			$scope.$apply(function(){$scope.isActive = true;})
		});
	});
	
	$scope.onClick = function (event, obj){

		$rootScope.$broadcast('onItemClick', obj.item);
		// $scope.isActive = true;

	};

}]);