const path = require('path');

module.exports = {
  devtool: "source-map",
  entry: [
    './src/client/main.js'
  ],
  output: {
    path: path.join(__dirname, 'public/dist'),
    publicPath: '/dist',
    filename: 'vote-app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
};
