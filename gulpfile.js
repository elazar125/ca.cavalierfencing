'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./app/sass/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
});

gulp.task('js', function () {
  gulp.src(['./app/**/module.js', './app/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./app'))
});

gulp.task('js:watch', function () {
  gulp.watch('./app/**/*.js', ['js']);
});

gulp.task('build', [ 'js', 'sass' ]);
gulp.task('watch', [ 'js:watch', 'sass:watch' ]);
