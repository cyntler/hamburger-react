var path = require('path');
var outPath = process.env.BUILD_TYPE === 'cjs' ? 'dist-cjs' : 'dist-esm';

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(outPath),
    filename: 'index.js',
    library: 'hamburger-react',
    libraryTarget: 'commonjs2',
    publicPath: '/' + outPath + '/',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    }
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
