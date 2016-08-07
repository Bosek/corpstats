import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';

gulp.task('clean', () => del('build/*'));
gulp.task('build', () =>
  gulp.src(['./src/**/*.js', '!./src/**/test/*']).pipe(babel()).pipe(gulp.dest('build'))
);
