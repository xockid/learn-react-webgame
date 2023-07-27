const path = require('path'); //노드... 경로 조작
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: 'number-baseball-setting',
  mode: 'development', //개발용: development 실서비스: production
  devtool: 'eval', //빠르게 개발하겠다(?).
  resolve: {
    extensions: ['.js', '.jsx'] //입력 -> app의 확장자 자동으로 불러오기
  },

  entry: {
    app: ['./client'],
  }, //입력

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['react-refresh/babel']
      },
    }],
  },
  plugins: [
    new RefreshWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist',
  },
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};