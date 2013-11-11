/*! qwant-mobile - v - 2013-11-11 *//*! qwant-mobile - v - 2013-11-07 */(function(u,c,A){'use strict';function w(c,s,g,b,d){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(l,m,y){return function(p,l,m){function k(){h&&(h.$destroy(),h=null);q&&(d.leave(q),q=null)}function x(){var a=c.current&&c.current.locals,e=a&&a.$template;if(e){var r=p.$new();y(r,function(v){k();v.html(e);d.enter(v,null,l);var f=g(v.contents()),n=c.current;h=n.scope=r;q=v;if(n.controller){a.$scope=h;var p=b(n.controller,a);n.controllerAs&&(h[n.controllerAs]=p);
v.data("$ngControllerController",p);v.children().data("$ngControllerController",p)}f(h);h.$emit("$viewContentLoaded");h.$eval(t);s()})}else k()}var h,q,t=m.onload||"";p.$on("$routeChangeSuccess",x);x()}}}}u=c.module("ngRoute",["ng"]).provider("$route",function(){function u(b,d){return c.extend(new (c.extend(function(){},{prototype:b})),d)}function s(b,c){var l=c.caseInsensitiveMatch,m={originalPath:b,regexp:b},g=m.keys=[];b=b.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g,function(b,
c,d,k){b="?"===k?k:null;k="*"===k?k:null;g.push({name:d,optional:!!b});c=c||"";return""+(b?"":c)+"(?:"+(b?c:"")+(k&&"(.+?)"||"([^/]+)")+(b||"")+")"+(b||"")}).replace(/([\/$\*])/g,"\\$1");m.regexp=RegExp("^"+b+"$",l?"i":"");return m}var g={};this.when=function(b,d){g[b]=c.extend({reloadOnSearch:!0},d,b&&s(b,d));if(b){var l="/"==b[b.length-1]?b.substr(0,b.length-1):b+"/";g[l]=c.extend({redirectTo:b},s(l,d))}return this};this.otherwise=function(b){this.when(null,b);return this};this.$get=["$rootScope",
"$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(b,d,l,m,s,p,w,z){function k(){var a=x(),e=t.current;if(a&&e&&a.$$route===e.$$route&&c.equals(a.pathParams,e.pathParams)&&!a.reloadOnSearch&&!q)e.params=a.params,c.copy(e.params,l),b.$broadcast("$routeUpdate",e);else if(a||e)q=!1,b.$broadcast("$routeChangeStart",a,e),(t.current=a)&&a.redirectTo&&(c.isString(a.redirectTo)?d.path(h(a.redirectTo,a.params)).search(a.params).replace():d.url(a.redirectTo(a.pathParams,d.path(),
d.search())).replace()),m.when(a).then(function(){if(a){var b=c.extend({},a.resolve),e,f;c.forEach(b,function(a,e){b[e]=c.isString(a)?s.get(a):s.invoke(a)});c.isDefined(e=a.template)?c.isFunction(e)&&(e=e(a.params)):c.isDefined(f=a.templateUrl)&&(c.isFunction(f)&&(f=f(a.params)),f=z.getTrustedResourceUrl(f),c.isDefined(f)&&(a.loadedTemplateUrl=f,e=p.get(f,{cache:w}).then(function(a){return a.data})));c.isDefined(e)&&(b.$template=e);return m.all(b)}}).then(function(d){a==t.current&&(a&&(a.locals=d,
c.copy(a.params,l)),b.$broadcast("$routeChangeSuccess",a,e))},function(c){a==t.current&&b.$broadcast("$routeChangeError",a,e,c)})}function x(){var a,b;c.forEach(g,function(r,k){var f;if(f=!b){var n=d.path();f=r.keys;var h={};if(r.regexp)if(n=r.regexp.exec(n)){for(var g=1,l=n.length;g<l;++g){var m=f[g-1],p="string"==typeof n[g]?decodeURIComponent(n[g]):n[g];m&&p&&(h[m.name]=p)}f=h}else f=null;else f=null;f=a=f}f&&(b=u(r,{params:c.extend({},d.search(),a),pathParams:a}),b.$$route=r)});return b||g[null]&&
u(g[null],{params:{},pathParams:{}})}function h(a,b){var d=[];c.forEach((a||"").split(":"),function(a,c){if(0===c)d.push(a);else{var g=a.match(/(\w+)(.*)/),h=g[1];d.push(b[h]);d.push(g[2]||"");delete b[h]}});return d.join("")}var q=!1,t={routes:g,reload:function(){q=!0;b.$evalAsync(k)}};b.$on("$locationChangeSuccess",k);return t}]});u.provider("$routeParams",function(){this.$get=function(){return{}}});u.directive("ngView",w);w.$inject=["$route","$anchorScroll","$compile","$controller","$animate"]})(window,
window.angular);
//# sourceMappingURL=angular-route.min.js.map

(function(m,g,n){'use strict';function h(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function D(a,d){function c(a,b,c,f){b=g.lowercase(b);if(r[b])for(;e.last()&&s[e.last()];)k("",e.last());t[b]&&e.last()==b&&k("",b);(f=u[b]||!!f)||e.push(b);var l={};c.replace(E,function(a,b,d,c,e){l[b]=p(d||c||e||"")});d.start&&d.start(b,l,f)}function k(a,b){var c=0,k;if(b=g.lowercase(b))for(c=e.length-1;0<=c&&e[c]!=b;c--);if(0<=c){for(k=e.length-1;k>=c;k--)d.end&&d.end(e[k]);e.length=
c}}var b,f,e=[],l=a;for(e.last=function(){return e[e.length-1]};a;){f=!0;if(e.last()&&v[e.last()])a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+e.last()+"[^>]*>","i"),function(a,b){b=b.replace(F,"$1").replace(G,"$1");d.chars&&d.chars(p(b));return""}),k("",e.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&d.comment(a.substring(4,b)),a=a.substring(b+3),f=!1);else if(w.test(a)){if(b=a.match(w))a=a.replace(b[0],""),f=!1}else if(H.test(a)){if(b=a.match(x))a=
a.substring(b[0].length),b[0].replace(x,k),f=!1}else I.test(a)&&(b=a.match(y))&&(a=a.substring(b[0].length),b[0].replace(y,c),f=!1);f&&(b=a.indexOf("<"),f=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(p(f)))}if(a==l)throw J("badparse",a);l=a}k()}function p(a){q.innerHTML=a.replace(/</g,"&lt;");return q.innerText||q.textContent||""}function z(a){return a.replace(/&/g,"&amp;").replace(K,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function A(a){var d=
!1,c=g.bind(a,a.push);return{start:function(a,b,f){a=g.lowercase(a);!d&&v[a]&&(d=a);d||!0!=B[a]||(c("<"),c(a),g.forEach(b,function(a,b){var d=g.lowercase(b);!0!=L[d]||!0===C[d]&&!a.match(M)||(c(" "),c(b),c('="'),c(z(a)),c('"'))}),c(f?"/>":">"))},end:function(a){a=g.lowercase(a);d||!0!=B[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(z(a))}}}var J=g.$$minErr("$sanitize"),y=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,x=/^<\s*\/\s*([\w:-]+)[^>]*>/,
E=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,I=/^</,H=/^<\s*\//,F=/\x3c!--(.*?)--\x3e/g,w=/<!DOCTYPE([^>]*?)>/i,G=/<!\[CDATA\[(.*?)]]\x3e/g,M=/^((ftp|https?):\/\/|mailto:|tel:|#)/i,K=/([^\#-~| |!])/g,u=h("area,br,col,hr,img,wbr");m=h("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");n=h("rp,rt");var t=g.extend({},n,m),r=g.extend({},m,h("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
s=g.extend({},n,h("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),v=h("script,style"),B=g.extend({},u,r,s,t),C=h("background,cite,href,longdesc,src,usemap"),L=g.extend({},C,h("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width")),
q=document.createElement("pre");g.module("ngSanitize",[]).value("$sanitize",function(a){var d=[];D(a,A(d));return d.join("")});g.module("ngSanitize").filter("linky",function(){var a=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s\.\;\,\(\)\{\}\<\>]/,d=/^mailto:/;return function(c,k){if(!c)return c;var b,f=c,e=[],l=A(e),h,m,n={};g.isDefined(k)&&(n.target=k);for(;b=f.match(a);)h=b[0],b[2]==b[3]&&(h="mailto:"+h),m=b.index,l.chars(f.substr(0,m)),n.href=h,l.start("a",n),l.chars(b[0].replace(d,
"")),l.end("a"),f=f.substring(m+b[0].length);l.chars(f);return e.join("")}})})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

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
/*! qwant-mobile - v - 2013-11-07 */"use strict";var app=angular.module("qwant",["ngRoute","qwant.filters","qwant.services","qwant.directives","qwant.controllers","ngSanitize","infinite-scroll","snap","underscore"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"partials/home.html",controller:"HomeController"}),a.when("/search",{templateUrl:"partials/searchResult.html",controller:"SearchController"}),a.otherwise({redirectTo:"/"})}]);app.services=angular.module("qwant.services",[]),app.controllers=angular.module("qwant.controllers",[]),app.directives=angular.module("qwant.directives",[]),app.filters=angular.module("qwant.filters",[]),app.controllers.controller("HomeController",["$scope","$rootScope",function(a,b){b.isHomePage=!0}]),app.controllers.controller("SearchController",["$scope","SearchManager","$location","snapRemote","$route","$rootScope",function(a,b,c,d,e,f){a.term=c.search().q,a.search=b,a.$on("$locationChangeSuccess",function(){b.currentPage=1,b.items=[]}),b.source=c.$$search.source,b.nextPage(a.term),f.isHomePage=!1,d.close()}]),app.controllers.controller("SideBarLeftController",["$scope","$location","$rootScope","_",function(a,b,c,d){a.user={name:"Baptiste",email:"hello@gmail.com"},a.$on("$locationChangeSuccess",function(){a.term=a.defaultTerm=void 0!==b.$$search.q?b.$$search.q:"Rechercher"}),a.$emit("$locationChangeSuccess"),a.cbs=[{checked:!0,value:"web",text:"Web",color:"green"},{checked:!0,value:"news",text:"Actualités",color:"orange"},{checked:!0,value:"social",text:"Social",color:"blue"},{checked:!0,value:"videos",text:"Medias",color:"red"},{checked:!0,value:"shopping",text:"Shopping",color:"yellow"}],a.onCbChange=function(){c.topics=d.where(a.cbs,{checked:!0})},a.onCbChange()}]),app.controllers.controller("SideBarRightController",["$scope","$window","snapRemote",function(){}]),angular.module("snap").directive("snapDrawers",["$window","snapRemote",function(a,b){return{restrict:"AE",link:function(a){var c=null;b.getSnapper().then(function(a){c=a,c.on("drag",function(){}),c.on("open",function(){})}),a.$on("destroy",function(){c.off("drag"),c.off("open"),c=null})}}}]),app.directives.directive("oldheader",["snapRemote","$window",function(){return{restrict:"AE",templateUrl:"partials/header.html",link:function(){}}}]),app.filters.filter("detailsURL",["$location",function(a){return function(b){return a.$$absUrl.concat("&_id=",b)}}]),app.filters.filter("host",["$location",function(){return function(a){return 0!==a.indexOf("http")?a.split("/")[0]:a.split("/")[2]}}]),app.filters.filter("sce",["$sce",function(a){return function(b){return a.trustAsResourceUrl(b)}}]),app.filters.filter("yturlformat",function(){return function(a){return a.concat("?showinfo=0&controls=0")}}),app.filters.filter("pricing",function(){return function(a){return a.replace("&euro;","€")}}),app.filters.filter("topicsFilter",["_",function(a){return function(b){return a.pluck(b,"value").join(",")}}]),app.services.value("ConfigManager",{searchUrl:"/search"}),app.services.factory("SearchManager",["$http","ConfigManager","$rootScope",function(a,b){return{items:[],url:b.searchUrl,busy:!1,term:"",currentPage:1,perPage:10,reset:!0,nextPage:function(b){var c=this;this.busy||(this.busy=!0,a.get(this.url,{params:{q:b,page:this.currentPage,source:this.source,size:this.perPage},cache:!0}).success(function(a){var d=a.items?a.items:a[c.source];angular.forEach(d,function(a){c.items.push(a)}),c.term=b,c.currentPage++,c.busy=!1}))}}}]),angular.module("underscore",[]).factory("_",function(){return window._});
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

	// !!!! REMOVE ON PROD
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
/*! qwant-mobile - v - 2013-11-07 */angular.module("snap",[]),angular.module("snap").directive("snapClose",["$rootScope","snapRemote",function(a,b){"use strict";return{restrict:"A",link:function(c,d){d.bind("click",function(){b.close(),a.$digest()})}}}]),angular.module("snap").directive("snapContent",["snapRemote",function(a){"use strict";return{restrict:"AE",link:function(b,c,d){c.addClass("snap-content");var e={element:c[0]};angular.isDefined(d.snapOptions)&&d.snapOptions&&angular.extend(e,b.$eval(d.snapOptions)),a.register(new window.Snap(e)),angular.isDefined(d.snapOptions)&&d.snapOptions&&b.$watch(d.snapOptions,function(b){a.getSnapper().then(function(a){a.settings(b)})},!0),b.$on("$destroy",function(){a.unregister()})}}}]),angular.module("snap").directive("snapDrawer",function(){"use strict";return{restrict:"AE",link:function(a,b,c){b.addClass("snap-drawer");var d=b.parent(),e=!0;for("right"===c.snapDrawer?b.addClass("snap-drawer-right"):b.addClass("snap-drawer-left");d.length;)d.hasClass("snap-drawers")&&(e=!1),d=d.parent();e&&b.wrap('<div class="snap-drawers" />')}}}),angular.module("snap").directive("snapDrawers",function(){"use strict";return{restrict:"AE",link:function(a,b){b.addClass("snap-drawers")}}}),angular.module("snap").directive("snapToggle",["$rootScope","snapRemote",function(a,b){"use strict";return{restrict:"A",link:function(c,d,e){d.bind("click",function(){e.snapToggle?b.toggle(e.snapToggle):b.toggle("left"),a.$digest()})}}}]),angular.module("snap").factory("snapRemote",["$q",function(a){"use strict";var b,c,d={},e="__DEFAULT_SNAPPER_ID__",f={};return f.getSnapper=function(a){return a=a||e,d.hasOwnProperty(a)||b(a),d[a].deferred.promise},f.register=function(a,f){f=f||e,d.hasOwnProperty(f)||b(f),d[f].isResolved&&b(f),c(a,f)},f.unregister=function(a){a=a||e,d.hasOwnProperty(a)&&delete d[a]},f.toggle=function(a,b){b=b||e,f.getSnapper().then(function(b){a===b.state().state?f.close(a):f.open(a)})},f.open=function(a,b){b=b||e,f.getSnapper().then(function(b){b.open(a)})},f.close=function(a){a=a||e,f.getSnapper().then(function(a){a.close()})},b=function(b){d[b]={deferred:a.defer(),isResolved:!1}},c=function(a,b){d[b].deferred.resolve(a),d[b].isResolved=!0},f}]);
/*! qwant-mobile - v - 2013-11-06 */var mod;mod=angular.module("infinite-scroll",[]),mod.directive("infiniteScroll",["$rootScope","$window","$timeout",function(a,b,c){return{link:function(d,e,f){var g,h,i,j;return b=angular.element(b),i=0,null!=f.infiniteScrollDistance&&d.$watch(f.infiniteScrollDistance,function(a){return i=parseInt(a,10)}),j=!0,g=!1,null!=f.infiniteScrollDisabled&&d.$watch(f.infiniteScrollDisabled,function(a){return j=!a,j&&g?(g=!1,h()):void 0}),h=function(){var c,h,k,l;return l=b.height()+b.scrollTop(),c=e.offset().top+e.height(),h=c-l,k=h<=b.height()*i,k&&j?a.$$phase?d.$eval(f.infiniteScroll):d.$apply(f.infiniteScroll):k?g=!0:void 0},b.on("scroll",h),d.$on("$destroy",function(){return b.off("scroll",h)}),c(function(){return f.infiniteScrollImmediateCheck?d.$eval(f.infiniteScrollImmediateCheck)?h():void 0:h()},0)}}}]);
(function(c,b){var a=a||function(k){var f={element:null,dragger:null,disable:"none",addBodyClasses:true,hyperextensible:true,resistance:0.5,flickThreshold:50,transitionSpeed:0.3,easing:"ease",maxPosition:266,minPosition:-266,tapToClose:true,touchToDrag:true,slideIntent:40,minDragDistance:5},e={simpleStates:{opening:null,towards:null,hyperExtending:null,halfway:null,flick:null,translation:{absolute:0,relative:0,sinceDirectionChange:0,percentage:0}}},h={},d={hasTouch:(b.ontouchstart===null),eventType:function(m){var l={down:(d.hasTouch?"touchstart":"mousedown"),move:(d.hasTouch?"touchmove":"mousemove"),up:(d.hasTouch?"touchend":"mouseup"),out:(d.hasTouch?"touchcancel":"mouseout")};return l[m]},page:function(l,m){return(d.hasTouch&&m.touches.length&&m.touches[0])?m.touches[0]["page"+l]:m["page"+l]},klass:{has:function(m,l){return(m.className).indexOf(l)!==-1},add:function(m,l){if(!d.klass.has(m,l)&&f.addBodyClasses){m.className+=" "+l}},remove:function(m,l){if(f.addBodyClasses){m.className=(m.className).replace(l,"").replace(/^\s+|\s+$/g,"")}}},dispatchEvent:function(l){if(typeof h[l]==="function"){return h[l].call()}},vendor:function(){var m=b.createElement("div"),n="webkit Moz O ms".split(" "),l;for(l in n){if(typeof m.style[n[l]+"Transition"]!=="undefined"){return n[l]}}},transitionCallback:function(){return(e.vendor==="Moz"||e.vendor==="ms")?"transitionend":e.vendor+"TransitionEnd"},canTransform:function(){return typeof f.element.style[e.vendor+"Transform"]!=="undefined"},deepExtend:function(l,n){var m;for(m in n){if(n[m]&&n[m].constructor&&n[m].constructor===Object){l[m]=l[m]||{};d.deepExtend(l[m],n[m])}else{l[m]=n[m]}}return l},angleOfDrag:function(l,o){var n,m;m=Math.atan2(-(e.startDragY-o),(e.startDragX-l));if(m<0){m+=2*Math.PI}n=Math.floor(m*(180/Math.PI)-180);if(n<0&&n>-180){n=360-Math.abs(n)}return Math.abs(n)},events:{addEvent:function g(m,l,n){if(m.addEventListener){return m.addEventListener(l,n,false)}else{if(m.attachEvent){return m.attachEvent("on"+l,n)}}},removeEvent:function g(m,l,n){if(m.addEventListener){return m.removeEventListener(l,n,false)}else{if(m.attachEvent){return m.detachEvent("on"+l,n)}}},prevent:function(l){if(l.preventDefault){l.preventDefault()}else{l.returnValue=false}}},parentUntil:function(n,l){var m=typeof l==="string";while(n.parentNode){if(m&&n.getAttribute&&n.getAttribute(l)){return n}else{if(!m&&n===l){return n}}n=n.parentNode}return null}},i={translate:{get:{matrix:function(n){if(!d.canTransform()){return parseInt(f.element.style.left,10)}else{var m=c.getComputedStyle(f.element)[e.vendor+"Transform"].match(/\((.*)\)/),l=8;if(m){m=m[1].split(",");if(m.length===16){n+=l}return parseInt(m[n],10)}return 0}}},easeCallback:function(){f.element.style[e.vendor+"Transition"]="";e.translation=i.translate.get.matrix(4);e.easing=false;clearInterval(e.animatingInterval);if(e.easingTo===0){d.klass.remove(b.body,"snapjs-right");d.klass.remove(b.body,"snapjs-left")}d.dispatchEvent("animated");d.events.removeEvent(f.element,d.transitionCallback(),i.translate.easeCallback)},easeTo:function(l){if(!d.canTransform()){e.translation=l;i.translate.x(l)}else{e.easing=true;e.easingTo=l;f.element.style[e.vendor+"Transition"]="all "+f.transitionSpeed+"s "+f.easing;e.animatingInterval=setInterval(function(){d.dispatchEvent("animating")},1);d.events.addEvent(f.element,d.transitionCallback(),i.translate.easeCallback);i.translate.x(l)}if(l===0){f.element.style[e.vendor+"Transform"]=""}},x:function(m){if((f.disable==="left"&&m>0)||(f.disable==="right"&&m<0)){return}if(!f.hyperextensible){if(m===f.maxPosition||m>f.maxPosition){m=f.maxPosition}else{if(m===f.minPosition||m<f.minPosition){m=f.minPosition}}}m=parseInt(m,10);if(isNaN(m)){m=0}if(d.canTransform()){var l="translate3d("+m+"px, 0,0)";f.element.style[e.vendor+"Transform"]=l}else{f.element.style.width=(c.innerWidth||b.documentElement.clientWidth)+"px";f.element.style.left=m+"px";f.element.style.right=""}}},drag:{listen:function(){e.translation=0;e.easing=false;d.events.addEvent(f.element,d.eventType("down"),i.drag.startDrag);d.events.addEvent(f.element,d.eventType("move"),i.drag.dragging);d.events.addEvent(f.element,d.eventType("up"),i.drag.endDrag)},stopListening:function(){d.events.removeEvent(f.element,d.eventType("down"),i.drag.startDrag);d.events.removeEvent(f.element,d.eventType("move"),i.drag.dragging);d.events.removeEvent(f.element,d.eventType("up"),i.drag.endDrag)},startDrag:function(n){var m=n.target?n.target:n.srcElement,l=d.parentUntil(m,"data-snap-ignore");if(l){d.dispatchEvent("ignore");return}if(f.dragger){var o=d.parentUntil(m,f.dragger);if(!o&&(e.translation!==f.minPosition&&e.translation!==f.maxPosition)){return}}d.dispatchEvent("start");f.element.style[e.vendor+"Transition"]="";e.isDragging=true;e.hasIntent=null;e.intentChecked=false;e.startDragX=d.page("X",n);e.startDragY=d.page("Y",n);e.dragWatchers={current:0,last:0,hold:0,state:""};e.simpleStates={opening:null,towards:null,hyperExtending:null,halfway:null,flick:null,translation:{absolute:0,relative:0,sinceDirectionChange:0,percentage:0}}},dragging:function(s){if(e.isDragging&&f.touchToDrag){var v=d.page("X",s),u=d.page("Y",s),t=e.translation,o=i.translate.get.matrix(4),n=v-e.startDragX,p=o>0,q=n,w;if((e.intentChecked&&!e.hasIntent)){return}if(f.addBodyClasses){if((o)>0){d.klass.add(b.body,"snapjs-left");d.klass.remove(b.body,"snapjs-right")}else{if((o)<0){d.klass.add(b.body,"snapjs-right");d.klass.remove(b.body,"snapjs-left")}}}if(e.hasIntent===false||e.hasIntent===null){var m=d.angleOfDrag(v,u),l=(m>=0&&m<=f.slideIntent)||(m<=360&&m>(360-f.slideIntent)),r=(m>=180&&m<=(180+f.slideIntent))||(m<=180&&m>=(180-f.slideIntent));if(!r&&!l){e.hasIntent=false}else{e.hasIntent=true}e.intentChecked=true}if((f.minDragDistance>=Math.abs(v-e.startDragX))||(e.hasIntent===false)){return}d.events.prevent(s);d.dispatchEvent("drag");e.dragWatchers.current=v;if(e.dragWatchers.last>v){if(e.dragWatchers.state!=="left"){e.dragWatchers.state="left";e.dragWatchers.hold=v}e.dragWatchers.last=v}else{if(e.dragWatchers.last<v){if(e.dragWatchers.state!=="right"){e.dragWatchers.state="right";e.dragWatchers.hold=v}e.dragWatchers.last=v}}if(p){if(f.maxPosition<o){w=(o-f.maxPosition)*f.resistance;q=n-w}e.simpleStates={opening:"left",towards:e.dragWatchers.state,hyperExtending:f.maxPosition<o,halfway:o>(f.maxPosition/2),flick:Math.abs(e.dragWatchers.current-e.dragWatchers.hold)>f.flickThreshold,translation:{absolute:o,relative:n,sinceDirectionChange:(e.dragWatchers.current-e.dragWatchers.hold),percentage:(o/f.maxPosition)*100}}}else{if(f.minPosition>o){w=(o-f.minPosition)*f.resistance;q=n-w}e.simpleStates={opening:"right",towards:e.dragWatchers.state,hyperExtending:f.minPosition>o,halfway:o<(f.minPosition/2),flick:Math.abs(e.dragWatchers.current-e.dragWatchers.hold)>f.flickThreshold,translation:{absolute:o,relative:n,sinceDirectionChange:(e.dragWatchers.current-e.dragWatchers.hold),percentage:(o/f.minPosition)*100}}}i.translate.x(q+t)}},endDrag:function(m){if(e.isDragging){d.dispatchEvent("end");var l=i.translate.get.matrix(4);if(e.dragWatchers.current===0&&l!==0&&f.tapToClose){d.dispatchEvent("close");d.events.prevent(m);i.translate.easeTo(0);e.isDragging=false;e.startDragX=0;return}if(e.simpleStates.opening==="left"){if((e.simpleStates.halfway||e.simpleStates.hyperExtending||e.simpleStates.flick)){if(e.simpleStates.flick&&e.simpleStates.towards==="left"){i.translate.easeTo(0)}else{if((e.simpleStates.flick&&e.simpleStates.towards==="right")||(e.simpleStates.halfway||e.simpleStates.hyperExtending)){i.translate.easeTo(f.maxPosition)}}}else{i.translate.easeTo(0)}}else{if(e.simpleStates.opening==="right"){if((e.simpleStates.halfway||e.simpleStates.hyperExtending||e.simpleStates.flick)){if(e.simpleStates.flick&&e.simpleStates.towards==="right"){i.translate.easeTo(0)}else{if((e.simpleStates.flick&&e.simpleStates.towards==="left")||(e.simpleStates.halfway||e.simpleStates.hyperExtending)){i.translate.easeTo(f.minPosition)}}}else{i.translate.easeTo(0)}}}e.isDragging=false;e.startDragX=d.page("X",m)}}}},j=function(l){if(l.element){d.deepExtend(f,l);e.vendor=d.vendor();i.drag.listen()}};this.open=function(l){d.dispatchEvent("open");d.klass.remove(b.body,"snapjs-expand-left");d.klass.remove(b.body,"snapjs-expand-right");if(l==="left"){e.simpleStates.opening="left";e.simpleStates.towards="right";d.klass.add(b.body,"snapjs-left");d.klass.remove(b.body,"snapjs-right");i.translate.easeTo(f.maxPosition)}else{if(l==="right"){e.simpleStates.opening="right";e.simpleStates.towards="left";d.klass.remove(b.body,"snapjs-left");d.klass.add(b.body,"snapjs-right");i.translate.easeTo(f.minPosition)}}};this.close=function(){d.dispatchEvent("close");i.translate.easeTo(0)};this.expand=function(l){var m=c.innerWidth||b.documentElement.clientWidth;if(l==="left"){d.dispatchEvent("expandLeft");d.klass.add(b.body,"snapjs-expand-left");d.klass.remove(b.body,"snapjs-expand-right")}else{d.dispatchEvent("expandRight");d.klass.add(b.body,"snapjs-expand-right");d.klass.remove(b.body,"snapjs-expand-left");m*=-1}i.translate.easeTo(m)};this.on=function(l,m){h[l]=m;return this};this.off=function(l){if(h[l]){h[l]=false}};this.enable=function(){d.dispatchEvent("enable");i.drag.listen()};this.disable=function(){d.dispatchEvent("disable");i.drag.stopListening()};this.settings=function(l){d.deepExtend(f,l)};this.state=function(){var l,m=i.translate.get.matrix(4);if(m===f.maxPosition){l="left"}else{if(m===f.minPosition){l="right"}else{l="closed"}}return{state:l,info:e.simpleStates}};j(k)};if((typeof module!=="undefined")&&module.exports){module.exports=a}if(typeof ender==="undefined"){this.Snap=a}if((typeof define==="function")&&define.amd){define("snap",[],function(){return a})}}).call(this,window,document);

/*! qwant-mobile - v - 2013-11-06 */function FastClick(a){"use strict";var b,c=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=a,!a||!a.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return FastClick.prototype.onClick.apply(c,arguments)},this.onMouse=function(){return FastClick.prototype.onMouse.apply(c,arguments)},this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(c,arguments)},this.onTouchMove=function(){return FastClick.prototype.onTouchMove.apply(c,arguments)},this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(c,arguments)},this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(c,arguments)},FastClick.notNeeded(a)||(this.deviceIsAndroid&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0)),a.addEventListener("click",this.onClick,!0),a.addEventListener("touchstart",this.onTouchStart,!1),a.addEventListener("touchmove",this.onTouchMove,!1),a.addEventListener("touchend",this.onTouchEnd,!1),a.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)}),"function"==typeof a.onclick&&(b=a.onclick,a.addEventListener("click",function(a){b(a)},!1),a.onclick=null))}FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),FastClick.prototype.needsClick=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(this.deviceIsIOS&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},FastClick.prototype.needsFocus=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"textarea":case"select":return!0;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},FastClick.prototype.sendClick=function(a,b){"use strict";var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent("click",!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},FastClick.prototype.focus=function(a){"use strict";var b;this.deviceIsIOS&&a.setSelectionRange?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},FastClick.prototype.updateScrollParent=function(a){"use strict";var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(a){"use strict";return a.nodeType===Node.TEXT_NODE?a.parentNode:a},FastClick.prototype.onTouchStart=function(a){"use strict";var b,c,d;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],this.deviceIsIOS){if(d=window.getSelection(),d.rangeCount&&!d.isCollapsed)return!0;if(!this.deviceIsIOS4){if(c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<200&&a.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(a){"use strict";var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},FastClick.prototype.onTouchMove=function(a){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(a){"use strict";return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(a){"use strict";var b,c,d,e,f,g=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0;if(this.lastClickTime=a.timeStamp,c=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(f=a.changedTouches[0],g=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||g,g.fastClickScrollParent=this.targetElement.fastClickScrollParent),d=g.tagName.toLowerCase(),"label"===d){if(b=this.findControl(g)){if(this.focus(g),this.deviceIsAndroid)return!1;g=b}}else if(this.needsFocus(g))return a.timeStamp-c>100||this.deviceIsIOS&&window.top!==window&&"input"===d?(this.targetElement=null,!1):(this.focus(g),this.deviceIsIOS4&&"select"===d||(this.targetElement=null,a.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(e=g.fastClickScrollParent,e&&e.fastClickLastScrollTop!==e.scrollTop)?!0:(this.needsClick(g)||(a.preventDefault(),this.sendClick(g,a)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(a){"use strict";return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable?!this.needsClick(this.targetElement)||this.cancelNextClick?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0:!0},FastClick.prototype.onClick=function(a){"use strict";var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},FastClick.prototype.destroy=function(){"use strict";var a=this.layer;this.deviceIsAndroid&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(a){"use strict";var b;if("undefined"==typeof window.ontouchstart)return!0;if(/Chrome\/[0-9]+/.test(navigator.userAgent)){if(!FastClick.prototype.deviceIsAndroid)return!0;if(b=document.querySelector("meta[name=viewport]"),b&&-1!==b.content.indexOf("user-scalable=no"))return!0}return"none"===a.style.msTouchAction?!0:!1},FastClick.attach=function(a){"use strict";return new FastClick(a)},"undefined"!=typeof define&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick;
//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
//# sourceMappingURL=underscore-min.map