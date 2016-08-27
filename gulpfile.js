'use strict';

var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    sass = require('gulp-sass'),
    util = require('gulp-util');

gulp.task('css', function() {
  gulp.src('css/main.scss')
  .pipe(sass().on('error', util.log))
  .pipe(cssnano({
    autoprefixer: false
  }))
  .pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
  gulp.watch('css/**/*.scss', ['css']);
});

gulp.task('default', ['watch']);
