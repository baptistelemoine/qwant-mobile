module.exports = function (grunt){
	
	grunt.initConfig({
		less:{
			developement:{
				src : ['app/less/app.less'],
				dest : 'app/css/app.css'
			}
		},
		watch:{
			files : ['app/less/*.less'],
			tasks : ['less']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
};