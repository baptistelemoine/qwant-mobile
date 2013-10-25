'use strict';

angular.module('snap').directive('snapDrawers', ['$window', function ($window){
	return {
		restrict:'AE',
		link:function(scope, element, attributes){

			$window.addEventListener('scroll', function (event){
				element.css('top', (this.document.documentElement.scrollTop||this.document.body.scrollTop) + 45);
			});

			scope.$on('destroy', function(){
				$window.removeEventListener('scroll');
			});
		}
	}
}]);