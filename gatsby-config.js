/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata:{
    title:"First Blog",
    description:"Nice and clean blog",
    author:"@john",
    person:{name:"john",age:29},
    simpleData:["item 1","item 2"],
    complexData:[{name:"john",age:29},{name:"smith",age:29}]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
