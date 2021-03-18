module.exports = {
  siteMetadata: {
    title: "Loi Van Pham's Portfolio",
    keywords:
      "web developer, nodejs, html5, css3, javascript, reactjs, gatsbyjs, portfolio, front-end",
    description:
      "Loi is a web developer since 2018. He specializes in React and it's ecosystem. Complimented with his experience with backend technologies he's able to build beautiful and responsive websites.",
    copyright: "Loi Van Pham",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `@import "/src/globalSass/_mixin.scss";`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon_196.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/`,
      },
      __key: "images",
    },
  ],
};
