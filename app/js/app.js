'use strict';

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
  $routeProvider.when('/details/:id', {templateUrl: 'partials/itemDetails.html', controller: 'DetailsController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

app.services = angular.module('qwant.services', []);
app.controllers = angular.module('qwant.controllers', []);
app.directives = angular.module('qwant.directives', []);
app.filters = angular.module('qwant.filters', []);