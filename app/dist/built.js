/*! qwant-mobile - v - 2013-11-12 */'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('qwant', [
  'ngRoute',
  'qwant.filters',
  'qwant.services',
  'qwant.directives',
  'qwant.controllers',
  'ngSanitize',
  'infinite-scroll',
  'snap',
  'underscore'
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

app.controllers.controller('HeaderController', ['$scope','$rootScope', function ($scope, $rootScope){
	$rootScope.isHomePage = true;
}]);
'use strict';

app.controllers.controller('HomeController', ['$scope','$rootScope','snapRemote', function ($scope, $rootScope, snapRemote){
	$rootScope.isHomePage = true;

	snapRemote.getSnapper().then(function (snapper){
		snapper.settings({
			minPosition:-290
		});
	});
}]);
'use strict';

app.controllers.controller('SearchController',[
	'$scope','SearchManager','$location', 'snapRemote', '$route', '$rootScope', function ($scope, SearchManager, $location, snapRemote, $route, $rootScope){

	$scope.term = $location.search().q;
	$scope.search = SearchManager;

	$scope.$on('$locationChangeSuccess', function (e){
		SearchManager.currentPage = 1;
		SearchManager.items = [];
	});

	SearchManager.source = $location.$$search.source;
	SearchManager.nextPage($scope.term);

	$rootScope.isHomePage = false;

	snapRemote.close();

	// snapper settings, for direct search url
	snapRemote.getSnapper().then(function (snapper){
		snapper.settings({
			minPosition:-290
		});
	});

	var snapper;
	snapRemote.getSnapper().then(function (snap){
		snapper = snap;
	});
	
	$scope.onClick = function (event, obj){
		//if snapper is open or snapper translate (drag), return
		if(snapper && (snapper.state().state === 'right' || snapper.state().state === 'left' || snapper.state().info.translation.absolute !== 0)){
			event.preventDefault();
			event.stopPropagation();
			return;
		}
		$rootScope.$broadcast('onItemClick', obj.item);
		obj.item.isActive = true;

	};

}]);
'use strict';


app.controllers.controller('SideBarLeftController', ['$scope','$location', '$rootScope', '_', function ($scope,$location,$rootScope,_){
	$scope.user = {
		'name':'Baptiste',
		'email':'hello@gmail.com'
	}

	$scope.$on('$locationChangeSuccess', function (e){
		$scope.term = $scope.defaultTerm = $location.$$search.q !== undefined ? $location.$$search.q : 'Rechercher';
	});

	//default value
	$scope.$emit('$locationChangeSuccess');

	//checkbox list
	$scope.cbs = [
		{checked:true,value:'web',text:'Web',color:'green'},
		{checked:true,value:'news',text:'Actualités',color:'orange'},
		{checked:true,value:'social',text:'Social',color:'blue'},
		{checked:true,value:'videos',text:'Medias',color:'red'},
		{checked:true,value:'shopping',text:'Shopping',color:'yellow'}
	];

	//change btn submit url
	$scope.onCbChange = function(){
		$rootScope.topics = _.where($scope.cbs, {checked:true});
	};

	//bind default value
	$scope.onCbChange();
}]);
'use strict';


app.controllers.controller('SideBarRightController', ['$scope','snapRemote','$rootScope', '$timeout', function ($scope, snapRemote, $rootScope, $timeout){

	$rootScope.$on('onItemClick', function (event, item){
		$scope.item = item;
		$timeout(function(){
			snapRemote.open('right');
			$scope.item.isActive = false;
		}, 500);

	});

}]);
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
		if(input.indexOf('http') !== 0) return input.split('/')[0].replace('www.','');
		else return input.split('/')[2].replace('www.','');

		return input.replace('www.','');
	}
}]);

app.filters.filter('sce', ['$sce', function ($sce){
	return function (input){
		return $sce.trustAsResourceUrl(input);
	}
}]);

app.filters.filter('yturlformat', function (){
	return function (input){
		return input.concat('?showinfo=0')
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

app.filters.filter('ellipsis', function (){
	return function (input){
		return input.length > 140 ? input.substring(0, 140) + '[...]' : input;
	}
});

app.filters.filter('hqthumb', function(){
	return function (input){
		var fileName = input.substring(input.lastIndexOf('/') + 1, input.length);
		if(fileName === 'default.jpg') return input.replace('default.jpg', 'hqdefault.jpg');
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
		reset:true,

		nextPage:function(term){

			var self = this;

			if (this.busy) return;
			this.busy = true;
			
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
'use strict';

angular.module('underscore', []).factory('_', function() {
    return window._;
});