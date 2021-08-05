var { src, dest } = require('gulp')
var babel = require('gulp-babel')

function defaultTask(cb){
    console.log("Ich lerne react");
    cb();
}
function clean(cb){
    //clean stuff
    cb();
}

function build(){
    return src('./src/*.js')
        .pipe(babel({
            presets: [
              [
                "@babel/env",
                {
                  modules: false
                }
              ]
            ]
          })
        )
        .pipe(dest('./build/'));
}
exports.default = defaultTask
exports.build = build
