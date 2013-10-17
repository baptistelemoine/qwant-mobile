'use strict'

app.services.factory('SearchManager', ['$http', 'ConfigManager', function ($http, ConfigManager){
	return {
		toto:ConfigManager.searchUrl,
		search:function(term){
			return $http('GET', url, post, function(status, response){
				// success
			}, function(status, response){
				// error
			});
		}
	};
}]);