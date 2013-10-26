/*! qwant-mobile - v - 2013-10-26 */'use strict';

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
'use strict';

app.controllers.controller('HomeController', ['$scope', function ($scope){
	
}]);
'use strict';

app.controllers.controller('SearchController',[
	'$scope','SearchManager','$location', function ($scope, SearchManager, $location){

	$scope.term = $location.search().q;
	SearchManager.setSource('all');
	$scope.search = SearchManager;
	SearchManager.nextPage($scope.term);

}]);
'use strict';


app.controllers.controller('SideBarController', ['$scope','$window','snapRemote', function ($scope, $window, snapRemote){
	$scope.user = {
		'name':'Baptiste Lemoine',
		'email':'baptiste.lemoine@gmail.com'
	}

	/*snapRemote.getSnapper().then(function (snapper){
		var sideBar = $window.document.querySelector('.snap-drawers');
		console.log(sideBar)
	});
	
	$window.addEventListener('scroll', function (e){
		// console.log(this.document.body.scrollTop);
	});*/
}]);
'use strict';

angular.module('snap').directive('snapDrawers', ['$window', function ($window){
	return {
		restrict:'AE',
		link:function(scope, element, attributes){

			$window.addEventListener('scroll', function (event){
				element.css('top', this.document.documentElement.scrollTop||this.document.body.scrollTop);
			});

			scope.$on('destroy', function(){
				$window.removeEventListener('scroll');
			});
		}
	}
}]);
'use strict';


app.directives.directive('header', ['snapRemote', '$window', function (snapRemote, $window){
	
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

/* Filters */

var filters = angular.module('qwant.filters', []);
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
		currentPage:0,
		perPage:10,
		source:'all',

		setSource:function(src){ this.source = src; },

		resetSearch:function(){
			this.items = [];
			this.currentPage = 0;
		},

		nextPage:function(term){

			var self = this;

			if (this.busy) return;
			this.busy = true;

			//new search ? reset all
			if(this.term !== term) this.resetSearch();

			var offset = this.currentPage > 0 ? this.currentPage * this.perPage : 0;
			
			$http.get(this.url, {params:{q:term, offset:offset, source:this.source}, cache:true})
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