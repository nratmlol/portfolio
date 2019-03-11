import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
// import PageTransition from "gatsby-plugin-page-transitions"

const Introduce = styled.p`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  letter-spacing: 0.1em
`

const Name = styled.span`
  color: #FF6D00;
  font-size: 2.45rem;
`
const Discription = styled.p`
  color: #BDBDBD;
  letter-spacing: 0.1em
`

const IndexPage = () => (
  <Layout pageTitle="-PortFolio">
    <Introduce>Hello, my name is <Name>nratmlol.</Name></Introduce>
    <Discription>I want to do something for someone. you first, me second.</Discription>
  </Layout>
)

export default IndexPage

    // <PageTransition
    //   defaultStyle={{
    //     transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
    //     left: '100%',
    //     position: 'absolute',
    //     width: '100%',
    //   }}
    //   transitionStyles={{
    //     entering: { left: '0%' },
    //     entered: { left: '0%' },
    //     exiting: { left: '100%' },
    //   }}
    //   transitionTime={500}
    // >