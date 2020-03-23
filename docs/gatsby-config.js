module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        purgeOnly: ['styles/index.css'],
        tailwind: true,
      },
    },
  ],
}
