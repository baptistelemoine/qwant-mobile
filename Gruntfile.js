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
				src: ['app/js/**/*.js'],
				dest: 'app/dist/built.js',
			},
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			dist: {
				files: {
					'app/dist/app.min.js': ['app/dist/built.js']
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('dist', ['concat:dist', 'uglify:dist']);

};