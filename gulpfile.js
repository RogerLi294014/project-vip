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
gulp.task("sass",function(){
    return gulp.src("index.scss")
    .pipe(sass())
    .pipe(gulp.dest("disc/css"))
    .pipe(minifycss())
    .pipe(rename("index-min.css"))
    .pipe(gulp.dest("disc/css"))
    .pipe(connect.reload())
})
gulp.task("scss",function(){
    return gulp.src("product.scss")
    .pipe(sass())
    .pipe(gulp.dest("disc/css"))
    .pipe(minifycss())
    .pipe(rename("product-min.css"))
    .pipe(gulp.dest("disc/css"))
    .pipe(connect.reload())
})

gulp.task("sass1",function(){
    return gulp.src("*.css")
    .pipe(sass())
    .pipe(gulp.dest("disc/css"))
})
gulp.task("data",function(){
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("disc/data"))
    .pipe(connect.reload())
})

gulp.task("combine",["copy","image","script","sass","sass1","scss","data"],function(){
    console.log("Best Match!")
})

gulp.task("watch",function(){
    gulp.watch("*.html",["copy"])
    gulp.watch("*.{png,jpg}",["image"])
    gulp.watch(["*.js","!gulpfile.js"],["script"])
    gulp.watch("index.scss",["sass"])
    gulp.watch(["*.json","!package.json"],["data"])
    gulp.watch("*.css",["sass1"])
    gulp.watch("product.scss",["scss"])
    
})
gulp.task("server", function(){
    connect.server({
        root: "disc",
        port: 8888,
        
    })
})

//设置一个默认任务

gulp.task("default", ["watch", "server"]);
