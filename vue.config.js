var px2rem = require('postcss-px2rem');
const postcss=px2rem({
  remUnit:37.5 //设计稿10等分后的值
})
module.exports = {
    runtimeCompiler:true,
    lintOnSave:false,
    css: {
      loaderOptions: {//添加postcss配置
        postcss: {
            plugins:[
              postcss
            ]
        }
      }
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:4000',
          ws: true,
          changeOrigin: true,
          pathRewrite:{
            '^/api':''
          }
        }
      }
    }
  }