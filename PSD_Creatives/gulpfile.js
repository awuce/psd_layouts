const {src, dest, parallel, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

function browser_sync() {
	browserSync.init({
		server: { baseDir: 'app/'},
		notify: false,
		online: true
	});
}

function scripts() {
	return src('app/scripts/hover.js')
		.pipe(concat('app.min.js'))
		.pipe(dest('app/scripts/'))
		.pipe(browserSync.stream());
}

function styles() {
	return src('app/styles/sass/styles.sass')
		.pipe(sass())
		.pipe(concat('app.min.css'))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true}))
		.pipe(dest('app/styles/css/'))
		.pipe(browserSync.stream());
}


function start_watch() {
	watch(['app/**/sass/**/*'], styles);
	watch('app/**/scripts/**/*').on('change', browserSync.reload);
	watch('app/**/*.html').on('change', browserSync.reload);
}

exports.browser_sync = browser_sync;
exports.scripts = scripts;
exports.start_watch = start_watch;
exports.default = parallel(styles, browser_sync, start_watch);