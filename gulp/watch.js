import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('sequence', done => {
  runSequence('clean', 'build', 'start', done);
});

gulp.task('watch', ['sequence'], () => {
  gulp.watch(
    ['./src/**/*', '!./src/**/test/*'],
    ['stop', 'sequence']);
});
