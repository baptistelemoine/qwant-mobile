'use strict';


app.controllers.controller('SideBarLeftController', ['$scope','$location', '$rootScope', '_', function ($scope,$location,$rootScope,_){
	$scope.user = {
		'name':'Baptiste',
		'email':'hello@gmail.com'
	}

	//checkbox list
	$scope.cbs = [
		{checked:true,value:'web',text:'Web',color:'green'},
		{checked:true,value:'news',text:'Actualités',color:'orange'},
		{checked:true,value:'social',text:'Social',color:'blue'},
		{checked:true,value:'videos',text:'Medias',color:'red'},
		{checked:true,value:'shopping',text:'Shopping',color:'yellow'}
	];

	$scope.$on('$locationChangeSuccess', function (e){
		$scope.term = $scope.defaultTerm = $location.$$search.q !== undefined ? $location.$$search.q : 'Rechercher';		
	});

	//default value
	$scope.$emit('$locationChangeSuccess');

	//change btn submit url
	$scope.onCbChange = function(){
		$rootScope.topics = _.where($scope.cbs, {checked:true});
	};

	//bind default value
	$scope.onCbChange();
}]);