'use strict';

app.controllers.controller('UserDetailsController', ['$scope', '$route', '$rootScope', 'snapRemote', function ($scope, $route, $rootScope, snapRemote){
	
	snapRemote.getSnapper().then(function (snapper){ snapper.close();})

	var currentUser = $route.current.params.user;
	$rootScope.isHomePage = false;
	var user = {

	}
}]);