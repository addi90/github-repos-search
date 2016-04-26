var gulp = require('gulp'),
  ts = require('gulp-typescript'),
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  minifyCss = require('gulp-minify-css'),
  rimraf = require('gulp-rimraf'),
  ngTemplates = require('gulp-ng-templates'),
  runSequence = require('run-sequence'),
  rename = require('gulp-rename'),
  config = require('./gulp.config'),
  tsConfig = {
    target: 'ES5',
    removeComments: false,
    noExternalResolve: false
  };

gulp.task('ts', function () {
  return gulp.src([config.src.ts])
    .pipe(sourcemaps.init())
    .pipe(ts(tsConfig))
    .js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest));
});

gulp.task('sass', function () {
  return gulp.src('app/styles/styles.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('dist/styles/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('dist/styles/'));
});

gulp.task('copy-lib', function () {
  return gulp.src(['bower_components/**/*.js'])
    .pipe(gulp.dest(config.dest + '/bower_components'));
});

gulp.task('ng-templates', function (done) {
  return gulp.src(['app/**/*.html',
    '!app/index.html'])
    .pipe(ngTemplates({
      module: 'app.templates',
      filename: '_templates.js'
    }))
    .pipe(gulp.dest('dist/external/'));
});

gulp.task('copy-index-html', function () {
  return gulp.src(['app/index.html'])
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  return gulp.src('dist/', { read: false }) // much faster
    .pipe(rimraf());
});

//TODO: Add `serve` task to serve from dist folder

gulp.task('build', function () {
    runSequence(
      'clean',
      [
        'ts',
        'sass',
        'copy-lib',
        'copy-index-html',
        'ng-templates'
      ]
    )
});

gulp.task('serve', function () {

});

gulp.task('watch', function () {
  gulp.watch(['app/**/*.ts'], 'ts');
})
