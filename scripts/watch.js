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

});

gulp.task('cssInject', ['styles'], function(){
return  gulp.src('./dest/styles/styles.css')
  .pipe(browserSync.stream());
})
