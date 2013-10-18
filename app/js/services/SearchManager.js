'use strict'

app.services.factory('SearchManager', ['$http', 'ConfigManager', function ($http, ConfigManager){
	
	return {
		
		items:[],
		url:ConfigManager.searchUrl,
		busy:false,
		term:'',
		currentPage:0,
		perPage:10,
		
		nextPage:function(term){
			
			var self = this;
			
			if (this.busy) return;
			this.busy = true;

			//new search ? reset all
			if(this.term !== term) {
				this.items = [];
				this.currentPage = 0;
			}

			var offset = this.currentPage > 0 ? this.currentPage * this.perPage : 0;

			$http.get(this.url, {params:{q:term, offset:offset}, cache:true})
			.success(function (data){
				angular.forEach(data.items, function (value, key){
					self.items.push(value);
				});
				self.term = term;
				self.currentPage++;
				self.busy = false;
			});
		}
	};
}]);