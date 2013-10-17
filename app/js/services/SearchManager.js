'use strict'

app.services.factory('SearchManager', ['$http', 'ConfigManager', function ($http, ConfigManager){
	return {
		url:ConfigManager.searchUrl,
		search:function(term){
			return $http({method:'GET', cache:true, url:this.url, params:{q:term}});
		}
	};
}]);