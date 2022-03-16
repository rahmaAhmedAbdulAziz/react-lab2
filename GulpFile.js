const { src, dest } = require('gulp');
const htmlmin = require ('gulp-htmlmin')
 const concat =require('gulp-concat');
 const terser = require('gulp-terser');
 const cleanCSS = require('gulp-clean-css');

var globs={
    html:"public/*.html",
    css:"src/*.css",
    js: "src/*.js"
}

function htmlTask() {
return src(globs.html)
.pipe(htmlmin({collapseWhitespace:true , removeComments:true}))
.pipe(dest("dist")) 

}
exports.html = htmlTask

function jsTask() {
    return src(globs.js)
    .pipe(concat("script.js"))
    .pipe(terser())
    .pipe(dest("dist/chiled")) 
    
    }
    exports.js = jsTask

    function cssTask() {
        return src(globs.css)
        .pipe(concat("style.js"))
        .pipe(cleanCSS())
        .pipe(dest("dist/chiled")) 
        
        }
// exports.default=htmlTask
exports.css = cssTask
