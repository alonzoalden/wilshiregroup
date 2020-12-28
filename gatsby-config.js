module.exports = {
  siteMetadata: {
    title: `Insurance Planning | Wealth Preservation`,
    description: `Insurance Planning | Wealth Preservation`,
    author: `Alonzo Alden`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
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
        icon: `src/assets/images/wilshireicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     custom: {
    //       families: ["Nucleo Outline", "Montserrat"],
    //       urls: ["./src/assets/scss/fonts/fonts.css"],
    //     },
    //   },
    // },
  ],
}
