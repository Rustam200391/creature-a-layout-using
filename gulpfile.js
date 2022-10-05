let gulp = require('gulp');
let babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));

gulp.task("js", () => {
    return gulp.src("js/All_js/*.js")
    .pipe(babel({
        presets: [ '@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("html", () => {
    return gulp.src("html/*.htm")
    .pipe(gulp.dest("dist/html"));
});

gulp.task("styles", () => {
    return gulp.src("style/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/styles/"));
});

gulp.task("watch", () => {
    return gulp.watch(["js/All_js/*.js", "html/*.htm","style/scss/*.scss"], gulp.parallel["js","html","styles"]);
})
