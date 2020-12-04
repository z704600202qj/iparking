const path = require('path');
const fs = require('fs');

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './src/styles/themes/index.less'), 'utf8'));
module.exports = {

  entry: {
    'iparking': path.resolve(__dirname, '../src/index'),
  },

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
    extensions: ['.ts', '.tsx', '.js', '.less'],
    modules: [path.resolve(__dirname, 'src/styles'), 'node_modules']
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
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader", // compiles Less to CSS
          options: {
                                        javascriptEnabled: true

          }
        }]
      }
    ],
  },
}
