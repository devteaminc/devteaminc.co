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

var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );
var minifycss = require('gulp-minify-css');
var imagemin = require( 'gulp-imagemin' );
var gulpConcat = require('gulp-concat');
var notify = require( 'gulp-notify' );


/**
 * Project Config
 * ==============
 */

// Set paths for files
var path = {
	build: {
		css: './build/css',
		img: './build/images',
		js: './build/scripts'
	},
	dev: {
		css: './development/css',
		sass: './development/sass',
		img: './development/images',
		js: './development/scripts'
	}
};