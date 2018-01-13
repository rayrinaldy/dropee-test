module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		pug: {
            compile: {
                options: {
                    pretty: false,
                },
                files: [{
                    expand: true,
                    cwd: 'views/',
                    src: ['*.pug'],
                    dest: 'public',
                    ext: '.html',
                }]
            },
        },
		sass : {
			dist: {
				options: {
					sourcemap: 'none',
					includePaths: require('bourbon').includePaths,
				},
                files: [{
                    expand: true,
                    cwd: 'assets/scss/',
                    src: ['style.scss'],
                    dest: 'public/css/',
                    ext: '.css',
                }]
            },
			bootstrap : {
				options: {
					sourcemap: 'none'
				},
				files : {
					'public/css/bootstrap.css': 'assets/scss/bootstrap.scss',
				}
			}
		},
		watch : {
			pug: {
				files : ['views/*.pug'],
				tasks : 'pug:compile',
				options : {
					event : ['changed'],
					livereload : true,
					spawn: false
				}
			},
			sass : {
				files : ['assets/scss/*.scss'],
				tasks : 'sass:dist',
				options : {
					event : ['changed'],
					livereload : true,
					spawn: false
				}
			},
			express: {
				files: [
					'app.js',
					// 'config/config.js',
					'routes/*.js',
					// 'lib/*.js'
				],
				tasks: ['express:dev', 'delay'], //, 'delay'
				options: {
					event: ['changed'],
					spawn: false,
					interrupt: true,
					livereload: true
				}
			}
		},
		express: {
			dev: {
				options: {
					script: 'bin/www',
					livereload: false,
					harmony: true,
					background: true,
					debug: false,
				}
			},
			live: {
				options: {
					script: 'bin/www',
					livereload: false,
					harmony: true,
					background: false
				}
			}
		},
		cssmin: {
			main: {
				files: {
					'./public/css/main.min.css': [
						'./public/css/bootstrap.css',
						'./public/css/style.css'
					]
				}
			}
		},
		uglify: {
			main: {
				options: {
					mangle: true,
					beautify: false
				},
				files: {
					'./public/js/main.min.js': [
						'./public/js/jquery.js',
						'./public/js/bootstrap.js',
						'./public/js/style.js'
					]
				}
			}
		}
	});

	grunt.registerTask('delay', 'Delay for express restart', function() {
		setTimeout(this.async(), 1200);
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-express-server');

	grunt.registerTask('default', ['express:dev', 'watch']);
	grunt.registerTask('build', ['pug', 'cssmin', 'uglify']);

};

