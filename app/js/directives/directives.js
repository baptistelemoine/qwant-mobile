'use strict';


app.directives.directive('header', ['snapRemote', '$window', function (snapRemote, $window){
	return {
		restrict:'AE',
		link:function(scope, element, attributes){
			snapRemote.getSnapper().then(function (snapper){
				snapper.on('drag', function (){
					var currentValue = $('.snap-content').offset().left;
				});
			});
		}
	}
}]);