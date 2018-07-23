'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
 
gulp.task('sass', () =>
  gulp.src('./src/styles/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles'))
);

gulp.task('watch', () =>
  gulp.watch('./src/styles/scss/*.scss', gulp.parallel('sass'))
);
 
gulp.task('default', () =>
  gulp.series('sass', 'watch')()
);