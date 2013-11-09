'use strict';

angular.module('snap').directive('snapContent', ['snapRemote', function (snapRemote){
	
	return {
		
		restrict:'AE',
		
		link:function(scope, element, attributes){

			console.log(element.css('left'));

			/*snapRemote.getSnapper().then(function (snapper){
				
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
*/		}
	};
}]);