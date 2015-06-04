//responsible for build process
var gulp = require('gulp');
//print info on command line when build is happening
var gutil = require('gulp-util');
//throw files from one part of process ot another
var source = require('vinyl-source-stream');
//what part of our code depends on what part of code
var browserify = require('browserify');
//watchify is going automatically rerun gulp file when gulp file changes
var watchify = require('watchify');
//workig in conjuction with browserify to convert files from jsx to js
var reactify = require('reactify');

gulp.task('default', function(){
	//create a bundler that is responsible for running browserify on our codebase
	//actual object we are going to use to run it and use watchify
	var bundler = watchify(browserify({
		//first file it's going to look for to determine order of build
		//app is going to know about all components
		entries: ['./src/dropdown/app.jsx'],
		//while figuring out dependies, it also needs to compile to JS using reactify module
		transform: [reactify],
		//look for these file extension
		extensions: ['.jsx'],
		//boilerplate
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true

	}))
	//declare function to build the bundler above
	function build(file){
		if (file) gutil.log("Recompiling "+ file);
		return bundler
			.bundle()
			//if there is ever an error, throw output on console
			.on('error', gutil.log.bind(gutil, "Browserify Error"))
			//after bundle is complete, browserify has done its thing, has been converted 
			// put all in main.js and add to current working directory
			.pipe(source('main.js'))
			.pipe(gulp.dest('./'));

	};
	//actually run build whcih runs bundler
	build()
	//whenever we make a change on file, build again
	bundler.on('update', build)

})