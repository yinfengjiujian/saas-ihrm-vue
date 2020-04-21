'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    proxyTable: {
      //企业信息请求的远程服务 //Updated 将直接对后台问服务请求,改为请求Zuul网关
      /**'/api': {
        target: 'http://localhost:9091',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }  **/
      /***
       * 
       * 这里前端VUE提供了代理，比如开发环境下的dev.env.js文件里的 BASE_API 为前缀：  /api
       * 加上后端服务的controller层请求地址为：@RequestMapping(value = "/company")  那么拼起来的地址为
       *  /api/company
       * 
       * 代理做什么事呢，当发现请求地址为 /api/company 的时候，就会拦截到请求，进入如下的配置中来，
       * 将请求的 ^/api/company  (-->   ^ 代表前面所有的地址)   进行拦截地址替换
       *   ^/api/company     替换成 target值，即为: http://localhost:9001/company/
       *    
       * 
       */
      // 企业微服务
      '/api/company': {
        target: 'http://localhost:9001/company/',
        changeOrigin: true,
        pathRewrite: {
          '^/api/company': ''
        }
      },
      // 系统微服务
      '/api/sys': {
        target: 'http://localhost:9002/sys/',
        changeOrigin: true,
        pathRewrite: {
          '^/api/sys': ''
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: false,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
