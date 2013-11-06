/*! qwant-mobile - v - 2013-11-06 */'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('qwant', [
  'ngRoute',
  'qwant.filters',
  'qwant.services',
  'qwant.directives',
  'qwant.controllers',
  'ngSanitize',
  'infinite-scroll',
  'snap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'partials/home.html', controller:'HomeController'});
  $routeProvider.when('/search', {templateUrl: 'partials/searchResult.html', controller: 'SearchController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

app.services = angular.module('qwant.services', []);
app.controllers = angular.module('qwant.controllers', []);
app.directives = angular.module('qwant.directives', []);
app.filters = angular.module('qwant.filters', []);
'use strict';

app.controllers.controller('HomeController', ['$scope','$rootScope', function ($scope, $rootScope){
	$rootScope.isHomePage = true;
}]);
'use strict';

app.controllers.controller('SearchController',[
	'$scope','SearchManager','$location', 'snapRemote', '$route', '$rootScope', function ($scope, SearchManager, $location, snapRemote, $route, $rootScope){

	$scope.term = $location.search().q;
	var sources = ['news','web','videos','shopping','social'];
	// var sources = ['news','videos'];
	SearchManager.setSource(sources.join(','));
	$scope.search = SearchManager;
	SearchManager.nextPage($scope.term);

	$rootScope.isHomePage = false;

	snapRemote.close();
		
}]);
'use strict';


app.controllers.controller('SideBarLeftController', ['$scope','$location', function ($scope,$location){
	$scope.user = {
		'name':'Baptiste',
		'email':'hello@gmail.com'
	}

	$scope.defaultTerm = $location.$$search.q !== undefined ? $location.$$search.q : 'Rechercher';

	$scope.$on('$locationChangeSuccess', function (e){
		$scope.defaultTerm = $location.$$search.q !== undefined ? $location.$$search.q : 'Rechercher';
	});

	$scope.cb = {
		cb1:true
	};	
}]);
'use strict';


app.controllers.controller('SideBarRightController', ['$scope','$window','snapRemote', function ($scope, $window, snapRemote){

	

}]);
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
'use strict';


app.directives.directive('oldheader', ['snapRemote', '$window', function (snapRemote, $window){
	
	return {
		
		restrict:'AE',
		
		templateUrl:'partials/header.html',

		link:function(scope, element, attributes){
			
			/*snapRemote.getSnapper().then(function (snapper){
				
				snapper.on('drag', function (){
					var currentValue = $('.snap-content').offset().left;
					var prop = 'translate3d(' + currentValue + 'px, 0,0)';
					// element.attr('style', '-webkit-transform:'+prop);
					// console.log(currentValue);
				});

			});
*/		}
	}
}]);
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

app.filters.filter('source',  function (){
	return function (input){
		var container = $('ul.checkbox-list');
		var cbs = $('input:checked', container);
		if(input) return input.concat(cbs.length);
		return input;
	}
});
'use strict';

app.services.value('ConfigManager', {
		searchUrl:'/search'
	}
);
'use strict'

app.services.factory('SearchManager', [
	'$http', 'ConfigManager', '$rootScope', function ($http, ConfigManager, $rootScope){
	
	return {
		
		items:[],
		url:ConfigManager.searchUrl,
		busy:false,
		term:'',
		currentPage:1,
		perPage:10,

		setSource:function(src){ this.source = src; },

		resetSearch:function(){
			this.items = [];
			this.currentPage = 1;
		},

		nextPage:function(term){

			var self = this;

			if (this.busy) return;
			this.busy = true;

			//new search ? reset all
			if(this.term !== term) this.resetSearch();
			
			$http.get(this.url, {params:{q:term, page:this.currentPage, source:this.source, size:this.perPage}, cache:true})
			.success(function (data){				
				var dataSource = data.items ? data.items : data[self.source];
				angular.forEach(dataSource, function (value, key){
					self.items.push(value);
				});
				self.term = term;
				self.currentPage++;
				self.busy = false;
			});
		}
	};
}]);