'use strict';

app.controllers.controller('SearchController',[
	'$scope','SearchManager','$location', 'snapRemote', '$route', '$rootScope', function ($scope, SearchManager, $location, snapRemote, $route, $rootScope){

	$scope.term = $location.search().q;
	SearchManager.setSource('all');
	$scope.search = SearchManager;
	SearchManager.nextPage($scope.term);

	$rootScope.isHomePage = false;
	
/*	$scope.$on('$routeChangeSuccess', function (event, current, prev) {
		
		event.stopPropagation;
		if(!current.params._id) return;

		snapRemote.getSnapper().then(function (snapper) {
			if($location.$$search._id) snapper.open('right');
			snapper.on('close', function (){
				$route.reloadOnSearch = false;
				$scope.$apply($location.search(prev.params))
			});
		});
	});	*/
	
}]);