'use strict';

angular.module('snap').directive('snapDrawers', ['$window', 'snapRemote', function ($window, snapRemote){
	
	return {
		
		restrict:'AE',
		
		link:function(scope, element, attributes){

			var snapper = null;

			snapRemote.getSnapper().then(function (snap){
				
				snapper = snap;

				snapper.on('drag', function (){
					// element.css('top', $window.document.documentElement.scrollTop||$window.document.body.scrollTop);
				});
				snapper.on('open', function (){
					// element.css('top', $window.document.documentElement.scrollTop||$window.document.body.scrollTop);
				});
			});

			scope.$on('destroy', function(){
				snapper.off('drag');
				snapper.off('open');
				snapper = null;
			});
		}
	};
}]);