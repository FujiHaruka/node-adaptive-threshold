const { join } = require('path')

module.exports = {
  entry: join(__dirname, 'examples/browser_example'),
  output: {
    path: join(__dirname, 'docs'),
    filename: 'demo.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
        query: {
          presets: [ 'es2015' ],
          babelrc: false,
          compact: false,
          sourceRoot: __dirname
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.js' ]
  }
}
