/**
 * DevTeam Inc. Gulpfile
 * =====================
 * By Mike Mitchell | http://devteaminc.co/
 */

'use strict';


/**
 * Dependencies
 * ============
 * Load our dependencies
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var gulpConcat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var usemin = require('gulp-usemin');
var clean = require('gulp-clean');
var notify = require('gulp-notify');


/**
 * Project Config
 * ==============
 */

// Set paths for files

var path = {

	// Build Paths

	build: {
		root: './build',
		css: './build/css',
		img: './build/images',
		js: './build/scripts'
	},

	// Development Paths

	dev: {
		root: './development',
		css: './development/css',
		sass: './development/sass',
		img: './development/images',
		js: './development/scripts'
	}

};


/**
 * Gulp Task
 * =========
 * Build
 */

gulp.task( 'build', function () {

	gulp.src( path.build.root, { read: false } )
		.pipe( clean() )
	;

	// Compile Sass to CSS, add in vendor prefixes and minify

	gulp.src( path.dev.sass + '/*.scss' )
		.pipe( sass() )
		.pipe( autoprefixer( 'last 2 version' ))
		.pipe( minifycss() )
		.pipe( gulp.dest( path.build.css ))
	;

	// Concat JavaScript, minify JavaScript and do some cache busting.

	gulp.src('./development/*.html')
		.pipe( usemin({
			js: [ uglify(), rev() ],
			css: [ rev() ]
		}))
		.pipe( gulp.dest( path.build.root ))
	;

});


/**
 * Gulp Task
 * =========
 * Default Task
 */

gulp.task( 'default', [ 'build' ] );