module.exports = function (grunt){
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less:{
			developement:{
				src : ['app/less/app.less'],
				dest : 'app/css/app.css'
			}
		},
		watch:{
			files : ['app/less/*.less'],
			tasks : ['less']
		},
		concat: {
			options: {
				stripBanners: true,
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> */',
			},
			dist: {
				files: {
					'app/dist/built.js' :['app/js/**/*.js'],
					'app/dist/angular-modules.min.js' : ['app/lib/angular/angular-route.min.js', 'app/lib/angular/angular-sanitize.min.js'],
					'app/dist/vendor.min.js' : ['app/lib/vendor/angular-snap/angular-snap.min.js', 'app/lib/vendor/ngInfiniteScroll/ng-infinite-scroll.min.js', 'app/lib/vendor/snapjs/snap.min.js', 'app/lib/vendor/fastclick/lib/fastclick.min.js', 'app/lib/vendor/underscore/underscore-min.js']
				}
			},
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			dist: {
				files: {
					'app/lib/vendor/ngInfiniteScroll/ng-infinite-scroll.min.js':['app/lib/vendor/ngInfiniteScroll/ng-infinite-scroll.js'],
					'app/dist/app.min.js': ['app/dist/built.js'],
					'app/lib/vendor/fastclick/lib/fastclick.min.js' : ['app/lib/vendor/fastclick/lib/fastclick.js']
				}
			}
		},
		cssmin:{
			with_banner:{
				options:{
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
					'<%= grunt.template.today("yyyy-mm-dd") %> */'
				},
				files:{
					'app/dist/app-min.css':['app/css/app.css', 'app/css/fontello.css']
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('dist', ['concat:dist', 'uglify:dist', 'cssmin']);

};