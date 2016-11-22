var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var minifycss = require('gulp-clean-css');
var base64 = require('gulp-base64');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var basePath = '';
var pathMap = {
    cssSrcPath: './client/static/style/sass/app.scss',
    cssDistPath: './client/static/release/style/',
    minCssDistPath: './client/static/release/style/',
    jsSrcPath: [],
    jsDistPath: '',
    imgSrcPath: '',
    imgDistPath: '',
    minImgDistPath: ''
};

var concatJsName = 'app.js';  // 配置合并js操作生成的目标文件名，.js不可省略

// 样式
gulp.task('css', function () {
    return sass(pathMap.cssSrcPath, {style: 'expanded', sourcemap: true})
        .pipe(sourcemaps.write('maps', {
            includeContent: false,
            sourceRoot: 'source'
        }))
        .pipe(gulp.dest(pathMap.cssDistPath))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(base64({
            baseDir: '',
            extensions: ['png', 'jpg', 'gif'],
            maxImageSize: 8 * 1024, // bytes
            deleteAfterEncoding: false,
            debug: false
        }))
        .pipe(gulp.dest(pathMap.minCssDistPath))
        .on('end', function () {
            console.log('task css finished!');
        });
});

// 图片
gulp.task('imgcopy', function () {
    return gulp.src(pathMap.imgSrcPath)
        .pipe(gulp.dest(pathMap.imgDistPath))
        .pipe(gulp.dest(pathMap.minImgDistPath))
        .on('end', function () {
            console.log('task imgcopy finished!');
        });
});

// 脚本
gulp.task('js', function () {
    return gulp.src(pathMap.jsSrcPath)
        .pipe(concat(concatJsName))  // 如果不需要合并js，则删除之
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(pathMap.jsDistPath))
        .on('end', function () {
            console.log('task js finished!');
        });
});

// 默认任务
gulp.task('default', function () {
    gulp.start('css');
});
