const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js', //设置入口JS文件
  output: {
    path: path.join(__dirname, './dist'), //设置出口JS文件
    filename: 'bundle.js' //生成的JS文件名
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }//从右往左解析，
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /.(png|jpg|gif|bmp|webp)$/,
        use: [
          {
            loader: 'url-loader?limit=14240&name=[hash:8]-[name].[ext]',
            // options: {
            //   limit: 8192 // 限制: 图片的最大大小, 如果超过了最大限制将会以原图片打包,
            // 如果小于限制则会通过 base64 进行转码
            // }
          }
        ]
      },
      {
        test: /.(eot|ttf|woff|woff2|svg)$/,
        use: 'url-loader',
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),//开启热模块
    new HTMLWebpackPlugin({ //托管在内存中
      template: path.join(__dirname, './src/index.html'),//托管的文件路径和文件
      filename: 'index.html'//托管的文件名
    })
  ],
  devServer: {

    compress: true,//压缩文件

    port: 8899,//端口配置
    open: true,//自动开启浏览器
  },
  mode: 'development' //开发模式
}