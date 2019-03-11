import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import Layout from "../components/layout"

const Card = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  width: 100%;
  margin-top: 1.45rem;
`
const Discription = styled.div`
  border-right solid 1px #EEEEEE;
  padding: 0 2em 0 1em;
  width: 50%
`
const Title = styled.h1`
  color: #757575;
`

const Excerpt = styled.p`
  color: #BDBDBD;
`

const Icon = styled.div`
  padding: 1em 2em;
  width: 50%;
  // background-color: blue;
`

const Category = styled.h1`
  width: 40%;
  margin-top: 1.45rem;
  border-bottom: solid 1px #EEEEEE;
`

const PortFolioCard = props => (
  <Card>
    <Discription>
      <Title>{props.name}</Title>
        {props.discriptions.map((discription) => (
          <Excerpt>・{discription}</Excerpt>
        ))}
    </Discription>
    <Icon><Img fluid={props.fluid} /></Icon>
  </Card>
)

export default ({ data }) => {
  return (
    <Layout pageTitle="-What I Do">
      {data.allWhatidoYaml.edges.map(({ node }) => (
        <div>
          <Category>{node.categoy}</Category>
          <PortFolioCard name={node.name} discriptions={node.discriptions} fluid={node.image.childImageSharp.fluid}/>  
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allWhatidoYaml {
      edges {
        node {
          categoy
          name
          discriptions
          image {
            childImageSharp {
              resize(width: 1500, height: 1500) {
                src
              }
              fluid(maxWidth: 786) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

