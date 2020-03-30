const commonPresets = ['@babel/preset-typescript']

module.exports = (api) => {
  return api.env('test') ? {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      ...commonPresets,
    ],
  } : {
    plugins: [
      ...(process.env.BUILD_TYPE === 'cjs' ? ['@babel/plugin-transform-modules-commonjs'] : []),
      'babel-plugin-jsx-remove-data-test-id',
    ],
    presets: commonPresets,
  }
}
