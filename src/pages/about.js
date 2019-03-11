import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"


const Content = styled.div`
  margin-top: 1.45rem;
  display: flex;
  flex: 1;
`
const Introduce = styled.div`
  background-color: red;
`

const IndexPage = ({ data }) => (
  <Layout pageTitle="-About">
    <Content>
      <Introduce>
        about
      </Introduce>
    </Content>
  </Layout>
)

export const query = graphql`
  query {
  	allMarkdownRemark {
  	  edges {
  	    node {
          html
  	    }
  	  }
  	} 
  }
`

export default IndexPage