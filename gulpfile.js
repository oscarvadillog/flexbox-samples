'use strict';

var autoprefixer = require('autoprefixer');
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./samples/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss())
    .pipe(gulp.dest('./samples'));
});

gulp.task('sass:watch', function () {
  gulp.watch('samples/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);
