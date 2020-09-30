const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser'); // use for es6 (instead of gulp-uglify)
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const { src, series, parallel, dest, watch } = require('gulp');

function copyHtml(){
  return src('./src/*.html').pipe(gulp.dest('dist'));
}

function imgTask(){
  return src('./src/assets/images/**')
  .pipe(imagemin())
  .pipe(dest('./dist/assets/images'));
}

function jsTask(){
  return src('./src/assets/js/**/*.js')
  .pipe(sourcemaps.init())
  .pipe(concat('all.js'))
  .pipe(terser())
  .pipe(sourcemaps.write('.'))
  .pipe(dest('./dist/assets/js'));
}

function cssTask(){
  return src('./src/assets/scss/styles.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([cssnano()]))
  .pipe(sourcemaps.write('.'))
  .pipe(dest('./dist/assets/css/'))
  .pipe(browserSync.stream());
}

function watchTask(){
  browserSync.init({
    server: {
      baseDir: './dist/'
    }
  });

  watch(['./src/assets/scss/**/*.scss', './src/assets/js/**/*.js'], {interval: 1000}, parallel(cssTask, jsTask, browserSync.reload));
}

exports.copyHtml = copyHtml;
exports.imgTask = imgTask;
exports.jsTask = jsTask;
exports.cssTask = cssTask;
exports.watchTask = watchTask;
exports.default = series(
  parallel(copyHtml, imgTask, jsTask, cssTask),
  watchTask
);