var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");

// HTML
const htmlmin = require("gulp-htmlmin");
const inject = require("gulp-inject");

var assets = "www/assets";
var www = "www/";

var ghpages = require("gh-pages");
var path = require("path");

gulp.task("sass", function() {
  return gulp
    .src(www + "/scss/*.+(scss|sass)")
    .pipe(sass().on("error", sass.logError)) // Converts Sass to CSS with gulp-sass
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest(www + "/css"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "www"
    }
  });
});

gulp.task("html", () => {
  gulp
    .src("www/index.html")
    .pipe(
      inject(gulp.src("./www/assets/js/*.js"), {
        starttag: "/* inject:js */",
        endtag: "/* endinject */",
        transform: (filePath, file) => file.contents.toString("utf8")
      })
    )
    .pipe(
      inject(gulp.src("./www/css/*.css"), {
        starttag: "/* inject:css */",
        endtag: "/* endinject */",
        transform: (filePath, file) => file.contents.toString("utf8")
      })
    )
    .pipe(gulp.dest("./www"));
});

gulp.task("default", ["browserSync", "sass"], function() {
  gulp.watch(www + "/scss/*.+(scss|sass)", ["sass"]);
  gulp.watch(www + "/css/*.css", ["html", browserSync.reload]);
  gulp.watch("www/*.html", browserSync.reload);
  gulp.watch(assets + "/js/*.js", browserSync.reload);
  // Other watchers
});

gulp.task("publish", function() {
  ghpages.publish("www", function(err) {
    console.log(err);
  });
});
