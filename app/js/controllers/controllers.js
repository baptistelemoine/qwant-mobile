'use strict';

/* Controllers */

var controllers = angular.module('qwant.controllers', []);

controllers.controller('TestController', ['$scope','SearchManager', function ($scope, SearchManager){

	$scope.val = SearchManager.toto;

}]);