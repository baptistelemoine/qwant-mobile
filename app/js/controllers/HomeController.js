'use strict';

app.controllers.controller('HomeController', ['$scope','$rootScope','snapRemote', function ($scope, $rootScope, snapRemote){
	$rootScope.isHomePage = true;

	snapRemote.getSnapper().then(function (snapper){
		snapper.settings({
			minPosition:-290
		});
		snapper.close();
	});
}]);