var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat');
var coffeeSources = ['component/coffee/*.coffee'];

var jsSources = ['component/scripts/rclick.js',
    'component/scripts/pixgrid.js',
    'component/scripts/tagline.js',
    'component/scripts/template.js'
];

var sassSource = ['component/sass/style.scss'];

gulp.task('coffee', function() {
    gulp.src(coffeeSources)
        .pipe(coffee({ bare: true })
            .on('error', gutil.log))
        .pipe(gulp.dest('component/scripts'))
});

gulp.task('js', function() {
    gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('build/development/js'))
});

gulp.task('compass', function() {
    gulp.src(sassSource)
    .pipe(compass())
    .pipe(gulp.dest('build/development/css'))
});
