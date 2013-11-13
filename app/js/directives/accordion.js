'use strict';

app.directives.directive('accordion', function (){
	return {
		'restrict':'A',
		link:function(scope, element, attr){

			var list = angular.element(element).find('ul:first-child');
			var items = angular.element(list).find('>li');

			angular.element(list).find('li.current').find('>ul').addClass('active');

			angular.forEach(items, function (value, key){
				
				var el = angular.element(value);				
				el.on('click', function (e){
					if(el.hasClass('current')) return;
					e.preventDefault();
					angular.forEach(items, function (value, key){
						angular.element(value).removeClass('current');
						angular.element(value).find('>ul').removeClass('active');
					});
					el.addClass('current');
					angular.element(el).find('>ul').addClass('active');
				});
			});

		}

	};
});