import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

// const Image = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         placeholderImage: file(relativePath: { eq: "steve.jpg" }) {
//           childImageSharp {
//             fluid(maxWidth: 90) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Img placeholderStyle fluid={data.placeholderImage.childImageSharp.fluid} />}
//   />
// )
// export default Image

// const Image = ({ data }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         placeholderImage: file(relativePath: { eq: "steve_83x90.jpg" }) {
//           childImageSharp {
//             fixed(width: 83) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Img placeholderStyle fixed={data.placeholderImage.childImageSharp.fixed} />}
//   />
// )
// export default Image

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "steve_transparent_83.png" }) {
          childImageSharp {
            resize(width: 90, height: 90){
              src
            }
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img placeholderStyle fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default Image