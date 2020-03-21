module.exports = {
  siteMetadata: {
    title: `Hi, I'm Gary.`,
    description: `I studied communication at Kent State before I realized everyone was talking about the web; so I learned to code. Since then, I have developed a few apps, built bots, scraped sites and many other things.`,
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
        background_color: `#f9f7ea`,
        theme_color: `#f9f7ea`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`inter:300,400,400i,500,600,700`],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-83866226-1`,
        head: true
      }
    }
  ]
};
