module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          `/shop/view`,
          `/cart/success`,
          `/collections/view`,
        ],
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/layouts/index.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Art by Jaret",
        short_name: "Art by Jaret",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icon: "src/assets/images/logos/favicon.png"
      },
    },
  ],
  siteMetadata: {
    title: "Art By Jaret",
    author: "Webdacity",
    siteUrl: `https://www.artbyjaret.co.za`,
  },
}

