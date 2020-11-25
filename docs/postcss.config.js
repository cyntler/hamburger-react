const nanoConfig = {
  preset: ['default', { discardComments: { removeAll: true } }],
}

module.exports = {
  plugins: [
    require('tailwindcss'),
    ...(process.env.NODE_ENV === 'production'
      ? [require('autoprefixer'), require('cssnano')(nanoConfig)]
      : []),
  ],
}
