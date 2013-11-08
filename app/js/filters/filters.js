'use strict';

app.filters.filter('detailsURL', ['$location', function ($location){
	return function (input) {
		return $location.$$absUrl.concat('&_id=', input);
	};
}]);

app.filters.filter('host', ['$location', function ($location){
	return function (input){
		if(input.indexOf('http') !== 0) return input.split('/')[0];
		else return input.split('/')[2];

		return input;
	}
}]);

app.filters.filter('sce', ['$sce', function ($sce){
	return function (input){
		return $sce.trustAsResourceUrl(input);
	}
}]);

app.filters.filter('yturlformat', function (){
	return function (input){
		return input.concat('?showinfo=0&controls=0')
	}
});

app.filters.filter('pricing', function (){
	return function (input){
		return input.replace('&euro;', '€');
	}
});

app.filters.filter('topicsFilter',  ['_', function (_){
	return function (input){
		return _.pluck(input, 'value').join(',');
	}
}]);

app.filters.filter('hqthumb', function(){
	return function (input){
		var fileName = input.substring(input.lastIndexOf('/') + 1, input.length);
		if(fileName === 'default.jpg') return input.replace('default.jpg', 'hqdefault.jpg');
		return input;
	}
});



