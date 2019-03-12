module.exports = {
  siteMetadata: {
    title: `nratmlol`,
    menuLinks: [
      {
        name: `PORTFOLIO`,
        link: `/`
      },
      {
        name: `WHATIDO`,
        link: `/whatido`
      },
      {
        name: `ABOUT`,
        link: `/about`
      },
      {
        name: `CONTACT`,
        link: `/contact`
      }
    ],
    description: ``,
    author: `@nratmlol`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-page-transitions`,
      options: {
        
        trasitionTime: 800,
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#6CA8F`,
        showSpinner: false,
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nratmlol-portfolio`,
        short_name: `portfolior`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
