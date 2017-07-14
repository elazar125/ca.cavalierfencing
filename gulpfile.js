'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var del = require('del');

gulp.task('sass', function () {
  return gulp.src('./app/sass/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
  gulp.src(['./app/module.js', './app/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function () {
  del(['dist/*']);
});

gulp.task('build', [ 'clean', 'js', 'sass' ]);

gulp.task('sass:watch', function () {
  gulp.watch('./app/sass/**/*.scss', ['build']);
});

gulp.task('js:watch', function () {
  gulp.watch('./app/**/*.js', ['build']);
});

gulp.task('watch', [ 'build', 'js:watch', 'sass:watch' ]);
