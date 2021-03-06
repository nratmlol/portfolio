/**
* Layout component that queries for data
* with Gatsby's StaticQuery component
*
* See: https://www.gatsbyjs.org/docs/static-query/
*/

import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"  
import styled from "styled-components"
import PageTrastion from "gatsby-plugin-page-transitions"
// import Colors from "../utils/color"
import SEO from "../components/seo"
import Header from "./header"
import Footer from "./footer"

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Title = styled.h1`
  margin: 1.45rem auto 0 0;
  padding-left: 2rem;
  color: #FFD180;
  font-size: 62px;
  letter-spacing: 24px;
`

const Content = styled.div`
  width: 100vw;
  margin-right: auto;
  margin-top: 2em;
  padding: 0 4rem 1.45rem;
  flex-grow: 1;
  justify-content: space-between;
  // w3-animate-bottom: -30px;/
`

const Layout = ({ children, pageTitle }) => (
  <Wrapper>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, 'portfolio', 'nratmlol']} />
    <Header portfolioTitle={`-PortFolio:`} />
      <Title>{pageTitle}</Title>
      <Content>
        <PageTrastion 
          defaultStyle={{
            transition: 'right 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
            right: '100%',
            position: 'relative',
            width: '100%',
          }}
          transitionStyles={{
            entering: { right: '0%' },
            entered: { right: '0%' },
            exiting: { right: '100%' },
          }}
          transitionTime={500}
        >
          {children}
        </PageTrastion>
      </Content>
    <Footer />
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
