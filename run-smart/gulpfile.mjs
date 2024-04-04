import gulp from 'gulp';
import browserSync from 'browser-sync';
import origSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';

const sass = gulpSass(origSass);

gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: 'src',
    },
  });
});

gulp.task('styles', function () {
  return gulp
    .src('src/sass/**/*.+(sass|scss)')
    .pipe(sass({ outputStyle: 'compressed' }).on('sass', sass.logError))
    .pipe(
      rename({
        prefix: '',
        suffix: '.min',
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.+(sass|scss)', gulp.parallel('styles'));
  gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));
