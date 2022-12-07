const path = require('path');

module.exports = {
  entry: {
    gameboard: './src/gameboard.js',
    index: './src/index.js',
    tree:  './src/tree.js',
    node: './src/node.js',
},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};