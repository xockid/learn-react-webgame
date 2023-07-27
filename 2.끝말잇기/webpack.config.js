const path = require('path'); //노드... 경로 조작
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: 'wordrelay-setting',
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
      test: /\.jsx?/, //js와 jsx 파일에
      loader: 'babel-loader', //babel-loader의 rule을 적용하겠다.
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR', 'last 2 chrome versions'],
            },
            debug: true,
          }],
          '@babel/preset-react',
        ],
        plugins: [
          'react-refresh/babel',
        ]
      },
    }], //여러 개의 규칙
  },
  plugins: [
    new RefreshWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'), //__dirname은 현재 폴더
    filename: 'app.js',
    publicPath: '/dist/',
  }, //출력
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};