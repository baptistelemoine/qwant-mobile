'use strict';


app.controllers.controller('SideBarController', ['$scope','$window','snapRemote', function ($scope, $window, snapRemote){
	$scope.user = {
		'name':'Baptiste Lemoine',
		'email':'baptiste.lemoine@gmail.com'
	}

	/*snapRemote.getSnapper().then(function (snapper){
		var sideBar = $window.document.querySelector('.snap-drawers');
		console.log(sideBar)
	});
	
	$window.addEventListener('scroll', function (e){
		// console.log(this.document.body.scrollTop);
	});*/
}]);