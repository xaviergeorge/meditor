var gulp = require('gulp');

var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-ruby-sass'),
    changed = require('gulp-changed'),
    clean = require('gulp-clean'),
    cache = require('gulp-cached'),
    livereload = require('gulp-livereload');

var version = '1.0.0';

var minifyOpts = {

};

var imagesOpts = {
    optimizationLevel: 5,
    progressive: true,
    interlaced: true
};

var sassOpts = {
    loadPath: [
        '/Library/Ruby/Gems/2.0.0/gems/compass-0.12.6/frameworks/compass/stylesheets',
        'bower_components/foundation/scss',
        'bower_components/mindy-sass/mindy'
    ]
};

var dst = {
    js: 'dist/js',
    css: 'dist/css',
    images: 'dist/images',
    sass: './css',
    fonts: 'dist/fonts',
    vendors: './vendors'
};

var paths = {
    js: [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/fastclick/lib/fastclick.js',
        'bower_components/foundation/js/foundation.min.js',
        'bower_components/underscore/underscore.js',
        'bower_components/mmodal/js/jquery.mindy.modal.js',
        'bower_components/flow.js/dist/flow.min.js'
    ],

    images: 'images/**/*',
    sass: [
        'scss/**/*.scss',
        'bower_components/mmodal/scss/jquery.mmodal.scss'
    ],
    css: [
        'css/**/*.css',
        'bower_components/foundation/css/normalize.css',
        'bower_components/foundation/css/foundation.css',
        'bower_components/fontawesome/css/font-awesome.min.css'
    ]
};

gulp.task('ckeditor', function() {
    return gulp.src('bower_components/ckeditor/**')
        .pipe(gulp.dest('vendors/ckeditor'));
});

gulp.task('fonts', function() {
    return gulp.src('bower_components/fontawesome/fonts/*')
        .pipe(gulp.dest(dst.fonts));
});

gulp.task('images', function() {
    return gulp.src(paths.images)
        .pipe(changed(dst.images))
        .pipe(cache('imagemin', imagesOpts))
        .pipe(gulp.dest(dst.images));
});

gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sass(sassOpts))
        .pipe(gulp.dest(dst.sass));
});

gulp.task('js', function() {
    return gulp.src(paths.js)
        .pipe(concat(version + '.all.js'))
        .pipe(gulp.dest(dst.js));
});

gulp.task('css', ['sass'], function() {
    return gulp.src(paths.css)
        .pipe(minifyCSS(minifyOpts))
        .pipe(concat(version + '.all.css'))
        .pipe(gulp.dest(dst.css));
});

// Rerun the task when a file changes
gulp.task('watch', ['default'], function() {
    var server = livereload(),
        liveReloadCallback = function(file) {
            setTimeout(function() {
                server.changed(file.path);
            }, 300);
        };

    gulp.watch(paths.js, ['js']).on('change', liveReloadCallback);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.sass, ['css']).on('change', liveReloadCallback);
});

// Clean
gulp.task('clean', function() {
    return gulp.src(['dist/*'], {
        read: false
    }).pipe(clean());
});

gulp.task('default', ['clean'], function() {
    return gulp.start('css', 'js', 'fonts', 'images', 'ckeditor');
});
