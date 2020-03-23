module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-discard-comments')({ removeAll: true }),
    require('autoprefixer'),
  ],
}
