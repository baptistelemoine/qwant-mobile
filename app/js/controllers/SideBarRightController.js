'use strict';


app.controllers.controller('SideBarRightController', ['$scope','snapRemote','$rootScope', '$timeout', function ($scope, snapRemote, $rootScope, $timeout){

	$rootScope.$on('onItemClick', function (event, item){
		$scope.item = item;
		$timeout(function(){
			snapRemote.open('right');
			$scope.item.isActive = false;
		}, 600);

	});

}]);