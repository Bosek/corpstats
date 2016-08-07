import bg from 'gulp-bg';
import gulp from 'gulp';

let bgtask;
gulp.task('stop', () => bgtask.stop());
gulp.task('start', bgtask = bg('node', './build/index.js'));
