'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var babelify = require('babelify');
var watchify = require('watchify');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var react = require('gulp-react')

gulp.task('server', function () {


    return gulp.src('./server.js')
        .pipe(react({harmony: true}))
        .pipe(gulp.dest('./dist'));
});




// add custom browserify options here
var customOpts = {
  entries: ['./public/app.js'],
  transform: [babelify],
  debug: true
};

var options = assign({}, watchify.args, customOpts);
var client = watchify(browserify(options)); 

// add transformations here
// client.transform(babelify);
// b.transform(uglify);

gulp.task('client', bundle); // so you can run `gulp js` to build the file
client.on('update', bundle); // on any dep update, runs the bundler
client.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return client.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
    .pipe(uglify()) 
    .pipe(gulp.dest('./public/js/dist'));
}





