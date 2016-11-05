module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 8000,
					base: 'src'
				}
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		}
	});
	grunt.registerTask('unitTest', [
		'karma:unit'
	]);
}