module.exports = {
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        purgeOnly: ['styles/index.css'],
        tailwind: true,
      },
    },
    'gatsby-plugin-typescript',
  ],
}
