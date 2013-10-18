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