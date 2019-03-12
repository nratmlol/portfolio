import React from "react"
import { graphql } from "gatsby"
// import styled from "styled-components"
import Layout from "../components/layout"


const IndexPage = ({ data }) => (
  <Layout pageTitle="-Contact">
    {data.allContactYaml.edges.map(({ node }) => (
      <ul style={{fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, 游ゴシック Medium, YuGothic, YuGothicM, Hiragino Kaku Gothic ProN, メイリオ, Meiryo, sans-serif"}}>
        <li id={node.id}>{node.name}: {node.href}</li>
      </ul>
    ))}
  </Layout>
)

export const query = graphql`
  query {
  	allContactYaml {
  	  edges {
  	    node {
  	      id
  	      name
          href
  	    }
  	  }
  	}
  }
`

export default IndexPage