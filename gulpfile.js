/* eslint-disable */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

var browserSync = require('browser-sync').create();


var paths = {
	styles: {
		src: './src/scss/**/*.scss',
	},
	scripts: {
		src: './src/js/**/*.js',
	},
};

var htmlSource = '**/*.html';

function styles() {
	return gulp
		.src(paths.styles.src)
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(
			autoprefixer({
				browsers: ['last 4 versions'],
				cascade: false,
			}),
		)
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());
}

function htmlreload() {
	return gulp
	.src(htmlSource)
	.pipe(browserSync.stream());
}


/*
 * task to minify the css files
 * SCSS files are converted to CSS and than minified by the following task
 */

function minifyCSS() {
	return gulp
		.src('.dist/css/*.css')
		.pipe(
			cleanCSS({ debug: true }, function(details) {
				console.log('=========================================');
				console.log(details.name + ': ' + details.stats.originalSize);
				console.log(details.name + ': ' + details.stats.minifiedSize);
				console.log('=========================================');
			}),
		)
		.pipe(
			rename({
				suffix: '.min',
			}),
		)
		.pipe(gulp.dest('./dist/css/min'));
}

// Optimizing Images
function optimiseImages() {
	return (
		gulp
			.src('./src/img/**/*.+(png|jpg|jpeg|gif|svg)')
			// Caching images that ran through imagemin
			.pipe(
				imagemin({
					interlaced: true,
				}),
			)
			.pipe(gulp.dest('./img'))
	);
}

// function watch() {
// 	gulp.watch(paths.styles.src, styles);
// }

function watch() {

	browserSync.init({
		server: {
			 watch: true,
			 port: 8080,
				baseDir: "./",
				// index: "index.html"
		}
	});
	gulp.watch(paths.styles.src, styles);
	gulp.watch(htmlSource, htmlreload);
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(gulp.parallel(styles));

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */

exports.styles = styles;
exports.watch = watch;
exports.build = build;
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = watch;
