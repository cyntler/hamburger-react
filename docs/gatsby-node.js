const path = require('path')
const fromRoot = (name) => path.resolve(__dirname + '/../node_modules/' + name)

exports.onCreateWebpackConfig = ({ actions }) =>
  actions.setWebpackConfig({
    resolve: {
      alias: {
        react: fromRoot('react'),
        'react-dom': fromRoot('react-dom'),
      },
    },
  })
