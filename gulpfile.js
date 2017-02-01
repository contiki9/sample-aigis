var gulp = require("gulp");
var aigis = require("gulp-aigis");

gulp.task("aigis", function() {
    gulp.src("./aigis/aigis_config.yml")
        .pipe(aigis());
});

gulp.task("default", ["aigis"]);
