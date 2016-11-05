var gulp = require('gulp');

//var $ = require('gulp-load-plugins')();

gulp.task('unitTest', function(done){
	console.log("unitTest", done);
	var karma = require('karma').server;
	console.log("karmaServer: ", karma);
	var karmaConf = require('./karma.conf.js')();
	console.log("karmaConf: ", karmaConf);
	karma.start(karmaConf, done);
});