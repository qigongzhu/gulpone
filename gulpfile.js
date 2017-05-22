//接值
var gulp=require('gulp');
var gulputil=require('gulp-util');
//css文件
var gulpcss=require('gulp-minify-css');
//html文件
var gulptml=require('gulp-minify-html');
//js文件
var uglifys=require('gulp-uglify');





//复制图片
gulp.task('images',function(){
	gulp.src('img/*.jpg').pipe(gulp.dest('two/img'));
});

//压缩js
gulp.task('myjs',function(){
	gulp.src('js/*.js').pipe(uglifys()).pipe(gulp.dest('two/js'));
});
//压缩lib下的js
gulp.task('libjs',function(){
	gulp.src('lib/bootstrap/js/*.js').pipe(gulpcss()).pipe(gulp.dest('two/lib/bootstrap/js'));
});
//压缩css
gulp.task('mycss',function(){
	gulp.src('css/*.css').pipe(gulpcss()).pipe(gulp.dest('two/css'));
});
//压缩lib下的css
gulp.task('libcss',function(){
	gulp.src('lib/bootstrap/css/*.css').pipe(gulpcss()).pipe(gulp.dest('two/lib/bootstrap/css'));
});
//压缩html
gulp.task('myhtml',function(){
	gulp.src('*.html').pipe(gulptml()).pipe(gulp.dest('two'));
});
//同时执行多个文件
gulp.task('default',['images','myjs','mycss','libcss','libjs','myhtml'],function(){
	console.log('执行完毕');
})