const {src, dest, parallel, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const less = require('gulp-less');

function browser_sync() {
	browserSync.init({
		server: { baseDir: 'app/'},
		notify: false,
		online: true
	});
}

function styles() {
	return src('app/styles/less/styles.less')
		.pipe(less())
		.pipe(concat('app.min.css'))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true}))
		.pipe(dest('app/styles/css/'))
		.pipe(browserSync.stream());
}


function start_watch() {
	watch(['app/**/less/**/*'], styles);
	watch('app/**/scripts/**/*').on('change', browserSync.reload);
	watch('app/**/*.html').on('change', browserSync.reload);
}

exports.browser_sync = browser_sync;
exports.start_watch = start_watch;
exports.default = parallel(styles, browser_sync, start_watch);