'use strict';

angular.module('snap').directive('snapDrawers', ['$window', 'snapRemote', function ($window, snapRemote){
	
	return {
		
		restrict:'AE',
		
		link:function(scope, element, attributes){

			snapRemote.getSnapper().then(function (snapper){
				snapper.on('drag', function (){
					element.css('top', $window.document.documentElement.scrollTop||$window.document.body.scrollTop);
				});
				snapper.on('open', function (){
					element.css('top', $window.document.documentElement.scrollTop||$window.document.body.scrollTop);
				});
			});

			scope.$on('destroy', function(){
				/*self.snapper.off('drag');
				self.snapper.off('open');
				self.snapper = null;
*/			});
		}
	}
}]);