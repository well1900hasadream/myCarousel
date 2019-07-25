// 只要是通过npm install安装过的包，都可以在这里引入使用
const gulp = require('gulp')
const connect = require('gulp-connect')


// 制定gulp任务

// 把src里面的html文件取出来，做一些压缩的工作，然后放进dist
gulp.task('html', () => {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())

})
// js任务是把文件取出来先通过BabelES6转成ES5的语法，在通过uglify压缩混淆
gulp.task('js', () => {
  gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload())
})

// 先把scss文件编译成css，再压缩
gulp.task('css', () => {
  gulp.src('src/css/**/*.css')
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload())
})


gulp.task('api', () => {
  gulp.src('src/api/**/*')
    .pipe(gulp.dest('dist/api'))
})

gulp.task('libs', () => {
  gulp.src('src/libs/**/*')
    .pipe(gulp.dest('dist/libs'))
    .pipe(connect.reload())
})

gulp.task('images', () => {
  gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'))
})

// 开启一个服务器
// 配置项：livereload支持热更新，port端口号，root项目根目录
gulp.task('server', function() {
  connect.server({
      livereload: true,
      port: 1900,
      root: 'dist'
  })
})

gulp.task('watch', () => {
  // 监听文件的修改执行对应的任务
  // src下面任意html文件发生了修改都要重新执行一次 html 任务
  gulp.watch('src/**/*.html', ['html'])
  gulp.watch('src/js/**/*.js', ['js'])
  gulp.watch('src/css/**/*.css', ['css'])
  gulp.watch('src/api/**/*.php', ['api'])
  gulp.watch('src/libs/**/*.js', ['libs'])
})

// 直接运行 gulp,这个时候会默认找到default任务，同时后面数组里的任务都会一起执行
gulp.task('default', ['html', 'css', 'js', 'libs', 'images', 'server', 'watch', 'api'])





