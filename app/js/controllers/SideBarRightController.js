'use strict';


app.controllers.controller('SideBarRightController', ['$scope','$window','snapRemote','$rootScope', function ($scope, $window, snapRemote, $rootScope){

	$rootScope.$on('onItemClick', function (event, item){
		$scope.item = item;
		snapRemote.open('right');
	});

}]);