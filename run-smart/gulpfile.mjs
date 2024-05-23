import gulp from 'gulp';
import browserSync from 'browser-sync';
import origSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import htmlmin from 'gulp-htmlmin';

const sass = gulpSass(origSass);

gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: 'dist',
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
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.+(sass|scss|css)', gulp.parallel('styles'));
  // gulp.watch('src/*.html').on('change', browserSync.reload);
  gulp.watch('src/*.html').on('change', gulp.parallel('html'));
});

gulp.task('html', function () {
  return gulp
    .src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('scripts', function () {
  return gulp.src('src/js/**/*.js').pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', function () {
  return gulp.src('src/fonts/**/*').pipe(gulp.dest('dist/fonts'));
});

gulp.task('icons', function () {
  return gulp
    .src('src/icons/**/*', { encoding: false })
    .pipe(gulp.dest('dist/icons'));
});

gulp.task('mailer', function () {
  return gulp.src('src/mailer/**/*').pipe(gulp.dest('dist/mailer'));
});

gulp.task('images', function () {
  return gulp
    .src('src/img/**/*', { encoding: false })
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task(
  'default',
  gulp.parallel(
    'watch',
    'server',
    'styles',
    'scripts',
    'fonts',
    'icons',
    'mailer',
    'html',
    'images'
  )
);
