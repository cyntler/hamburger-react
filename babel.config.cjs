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
    presets: [
      '@babel/preset-react',
    ],
  }
}
