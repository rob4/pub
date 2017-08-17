var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer =require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
cssImport = require('postcss-import'),
assets =require('postcss-assets');


gulp.task('styles',function(){
  return gulp.src('./css/styles.css')
  .pipe(postcss([cssImport, cssvars, autoprefixer]))
  .on('error', function(errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
  })
    .pipe(gulp.dest('./dest/styles'));
});
