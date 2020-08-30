const path = require('path');
const px2rem = require('postcss-px2rem');


const postcss = px2rem({
    remUnit: 75 //基准大小 baseSize，需要和rem.js中相同
})

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    lintOnSave: false,
    devServer: {
        open: true
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('components', resolve('./src/components'))
            //set第一个参数：设置的别名，第二个参数：设置的路径
            　　　　
    }
}