/*
  * 将每一个组件打包生成一个文件，用于按需加载
 */
const path = require('path')
const merge = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpackBaseConfig = require('./webpack.base.js')
const fs = require('fs')
const componentArr = fs.readdirSync('./src/packages')
const res = componentArr.filter((item)=> !['utils','styles'].includes(item))
const entires = {}
res.map((item) => {
  entires[item] = `@/packages/${item}/index.js`
})

module.exports = merge(webpackBaseConfig, {
  entry: entires,
  mode: 'production',
  output: {
    path: path.join(__dirname, '../lib'),
    publicPath: '/lib/',
    filename: '[name]/index.js',
    library: 'comp-lib',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  performance: {
    hints: false
  },
  stats: 'normal',
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
})
