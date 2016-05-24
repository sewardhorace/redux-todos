module.exports = {
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:8080',
      './js/index.js',
    ]
  },
  output: {
    filename: 'public/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
