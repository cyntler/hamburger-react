module.exports = (api) => {
  return api.env('test') ? {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
  } : {
    ignore: [
      '**/*.test.js',
    ],
    plugins: [
      'babel-plugin-jsx-remove-data-test-id',
    ],
    presets: [
      '@babel/preset-react',
    ],
  }
}
