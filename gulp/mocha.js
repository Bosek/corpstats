import gulp from 'gulp';
import mocha from 'gulp-mocha';

const CI = process.env.CI === 'true';

gulp.task('mocha', () => {
  process.env.NODE_ENV = 'test';
  gulp.src('./src/**/test/*.js', { read: false }).pipe(mocha({
    reporter: CI ? 'list' : 'spec',
  })).once('error', () => {});
});

gulp.task('mocha-watch', ['mocha'], () => {
  gulp.watch(['./src/**/*.js'], ['mocha']);
});
