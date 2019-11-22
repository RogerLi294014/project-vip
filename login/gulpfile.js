const gulp=require("gulp");
const sass=require("gulp-sass");
const rename=require("gulp-rename");
const minifycss=require("gulp-minify-css")
const connect=require("gulp-connect")

gulp.task("copy",function(){
return gulp.src("*.html")
     .pipe(gulp.dest("disc/"))
     .pipe(connect.reload())
})

gulp.task("image",function(){
    return gulp.src(["vippic/*.{png,jpg,gif}"],["vipheaderpic/*.{png,jpg,gif}"])
    .pipe(gulp.dest("disc/img"))
    .pipe(connect.reload())
})

gulp.task("script",function(){
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("disc/js"))
    .pipe(connect.reload())
})
gulp.task("php",function(){
    return gulp.src("*.php")
    .pipe(gulp.dest("disc/php"))
    .pipe(connect.reload())
})


gulp.task("sass1",function(){
    return gulp.src("*.css")
    .pipe(sass())
    .pipe(gulp.dest("disc/css"))
})

gulp.task("scss1",function(){
    return gulp.src("register.scss")
    .pipe(sass())
    .pipe(gulp.dest("disc/css"))
    .pipe(minifycss())
    .pipe(rename("register-min.css"))
    .pipe(gulp.dest("disc/css"))
    .pipe(connect.reload())
})
gulp.task("scss2",function(){
    return gulp.src("login.scss")
    .pipe(sass())
    .pipe(gulp.dest("disc/css"))
    .pipe(minifycss())
    .pipe(rename("login-min.css"))
    .pipe(gulp.dest("disc/css"))
    .pipe(connect.reload())
})
gulp.task("data",function(){
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("disc/data"))
    .pipe(connect.reload())
})

gulp.task("combine",["copy","image","script","sass1","scss2","data","scss1","php"],function(){
    console.log("Best Match!")
})

gulp.task("watch",function(){
    gulp.watch("*.html",["copy"])
    gulp.watch("*.{png,jpg}",["image"])
    gulp.watch(["*.js","!gulpfile.js"],["script"])
    
    gulp.watch(["*.json","!package.json"],["data"])
    gulp.watch("*.css",["sass1"])
    gulp.watch("login.scss",["scss2"])
    gulp.watch("register.scss",["scss1"])
    gulp.watch("*.php",["php"])
    
    
})


//设置一个默认任务

gulp.task("default", ["watch"]);
