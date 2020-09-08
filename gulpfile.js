const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss to css
function style(){
  // 1. find scss
  return gulp.src('./assets/scss/styles.scss')
  // 2. pass file through sass compiler
  //    and if error, clean up the message that is outputted to terminal
  .pipe(sass().on('error', sass.logError))
  // 3. save compiled css
  .pipe(gulp.dest('./assets/css/'))
  // 4. stream changes to browsers
  .pipe(browserSync.stream());
}

function watch(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./assets/scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./assets/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;