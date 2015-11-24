var gulp = require('gulp');
var bower = require('gulp-bower');
var del = require('del');

gulp.task('default', ['bower']);

gulp.task('clean', function(callback) {
    del(['src/main/js/bower_components'], callback)
});

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest('src/main/js/bower_components'))
});