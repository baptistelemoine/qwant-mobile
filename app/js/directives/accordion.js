'use strict';

app.directives.directive('accordion', function(){
	return {
		'restrict':'A',
		link:function(scope, element, attr){

			var list = angular.element(element).find('ul:first-child');
			var items = angular.element(list).find('>li');

			element.bind('click', function (e){

				var current = angular.element(e.target).parent();
				if(current.hasClass('current')) return;
				angular.forEach(items, function (value, key){
					angular.element(value).removeClass('current');
					angular.element(value).find('>ul').removeClass('active');
				});
				current.addClass('current');
				angular.element(current).find('>ul').addClass('active');
			});

		}

	};
});