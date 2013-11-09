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

	var snapper;
	snapRemote.getSnapper().then(function (snap){
		snapper = snap;
	});
	
	$scope.onClick = function (event, obj){
		//if snapper is open or snapper translate (drag), return
		if(snapper && (snapper.state().state === 'right' || snapper.state().state === 'left' || snapper.state().info.translation.absolute !== 0)){
			event.preventDefault();
			event.stopPropagation();
			return;
		}
		$rootScope.$broadcast('onItemClick', obj.item);

	};

}]);