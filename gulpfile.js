var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var webserver = require('gulp-webserver');

var plumberErrorHandler = {
    errorHandler: notify.onError({
        title: 'Gulp',
        message: 'Error: <%= error.message %>'
    })
};

gulp.task('scss', function () {
    gulp.src("./scss/*.scss")
        .pipe(plumber(plumberErrorHandler))
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css/"))
});


gulp.task('watch', function () {
    gulp.watch('./scss/*.scss', ['scss']);
});

gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(webserver({
            host: '0.0.0.0',
            livereload: true,
            open: true
        }));
})

gulp.task('default', ['webserver', 'scss', 'watch']);
