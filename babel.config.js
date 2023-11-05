const commonPresets = ['@babel/preset-react', '@babel/preset-typescript'];

module.exports = (api) => {
  return api.env('test')
    ? {
        presets: ['@babel/preset-env', ...commonPresets],
      }
    : {
        plugins: [
          ...(process.env.BUILD_TYPE === 'cjs'
            ? ['@babel/plugin-transform-modules-commonjs']
            : []),
          'babel-plugin-jsx-remove-data-test-id',
        ],
        presets: commonPresets,
      };
};
