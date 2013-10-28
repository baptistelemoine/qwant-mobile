'use strict';

app.filters.filter('detailsURL', ['$location', function ($location){
	return function (input) {
		return $location.$$absUrl.concat('&_id=', input);
	};
}]);