var gulp = require("gulp");
var aigis = require("gulp-aigis");

gulp.task("aigis", function() {
    gulp.src("./aigis/aigis_config.yml")
        .pipe(aigis());
});

gulp.task('default', function(callback) {

    return runSequence(
        'clean',
        ['jade', 'sass', 'output'],
        'replaceHostName',
        'copy-dist',
        'watch',
        callback
    );
});