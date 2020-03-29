const path = require('path')
const fromCurrent = (name) => path.resolve(__dirname + '/node_modules/' + name)

exports.onCreateWebpackConfig = ({ actions }) =>
  actions.setWebpackConfig({
    resolve: {
      alias: {
        react: fromCurrent('react'),
        'react-dom': fromCurrent('react-dom'),
      },
    },
  })
