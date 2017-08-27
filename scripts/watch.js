var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync =require('browser-sync').create();

gulp.task('watch', function(){

  browserSync.init ({
    server: {
    baseDir:  "./"
    }
  });

watch('index.html', function(){
    browserSync.reload();
});

watch('./css/**/*.css', function(){
  gulp.start('cssInject');
});

// watch('./scripts/**/*.js', function(){
// gulp.start('scriptsRefesh');
//});

});

gulp.task('cssInject', ['styles'], function(){
return  gulp.src('./dest/styles/styles.css')
  .pipe(browserSync.stream());
});
/*
gulp.task('scriptsRefesh', ['scripts'], function(){
  browserSync.reload();
});
*/
