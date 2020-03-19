module.exports = {
  siteMetadata: {
    title: `Hi, I'm Gary.`,
    description: `I studied communication before realizing it's future lives on the web. Since then I've wrote apps, built bots, scraped sites & many other things!`,
    author: `@garybunofsky`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`inter`, `source sans pro\:300,400,400i,500,600,700`],
        display: "swap"
      }
    }
  ]
};
