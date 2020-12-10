const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: {
    'iparking': path.resolve(__dirname, '../src/index'),
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/')// 这样配置后 @ 可以指向 src 目录
    },
    extensions: ['.ts', '.tsx', '.js', '.less'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
      new UglifyJsPlugin({
        cache: true
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /.ts|tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.less|.css$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
         
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          },
        ]
      },
    ],
  },
}
