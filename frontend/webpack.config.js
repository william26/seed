const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: process.env.NODE_ENV === 'production' ?
      'bundle.[hash:5].js' :
      'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.*\.js/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader?modules",
          "sass-loader",
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost",
      }
    },
  },
}
