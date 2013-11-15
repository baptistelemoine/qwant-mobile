'use strict';

app.controllers.controller('HomeController', ['$scope','$rootScope','snapRemote', function ($scope, $rootScope, snapRemote){
	
	$rootScope.isHomePage = true;

	snapRemote.getSnapper().then(function (snapper){
		snapper.settings({
			minPosition:-290
		});
		snapper.close();
		//disable drag me button when drag first init
		snapper.on('drag', function (e){
			$scope.$apply(function (){
				$scope.userHasDragged = true;
				snapper.off('drag');
			});
		});
	});
}]);