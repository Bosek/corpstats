/* eslint-disable no-undef */
import bg from 'gulp-bg';
import gulp from 'gulp';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';
import runSequence from 'run-sequence';
import watch from 'gulp-watch';

let bgtask;
gulp.task('compile', () =>
  gulp.src(['./src/**/*.js', '!./src/**/test/*']).pipe(babel()).pipe(gulp.dest('dist'))
);
gulp.task('mocha', () =>
  gulp.src('./src/**/test/*.js').pipe(mocha({ reporter: 'nyan' }))
);

gulp.task('node', ['compile'], bgtask = bg('node', './dist/index.js'));

const exitCallback = (proc) => { if (proc.errorcode !== 0) { process.exit(proc.errorcode); } };
gulp.task('stop', () => {
  bgtask.setCallback(exitCallback);
  bgtask.stop();
});

gulp.task('start', ['node'], () => {
  watch(['./src/**/*', '!./src/**/test/*'], () => {
    runSequence('stop', 'node');
  });
});

gulp.task('testwatcher', ['mocha'], () => {
  gulp.watch(['./src/**/test/*'], ['mocha']);
});

gulp.task('test', ['mocha']);

// Default task to start development. Just type gulp.
gulp.task('default', ['start']);
