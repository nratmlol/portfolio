import { StaticQuery, Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Icon from "./image"
// import "./layout.css"

const Container = styled.header`
  // position: fixed;
  width: 100%;
  display: flex;
  z-index: 999;
  border-bottom: solid 1px #EEEEEE;
`

const IconContainer = styled.div`
  width: 83px;
  margin: 20px 0 0 30px;
`

const Nav = styled.nav`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    margin: 24px 30px 0 450px;
`

const Li = styled.li`
  list-style-type: none;
  margin: 0;
  font-size: 24px;
`

// const PortfolioTitle = styled.h1`
//   padding: 230px 0 0 280px;
// `

const Header = ({ portfolioTitle }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Container>
          <IconContainer>
            <Link to={`/`}>
              <Icon />
            </Link>
          </IconContainer>
          <Nav>
            {
              data.site.siteMetadata.menuLinks.map(link => 
                <Li key={link.name}>
                  <Link to={link.link}>{link.name}</Link>
                </Li>
              )
            }
          </Nav>
        </Container>
      </React.Fragment>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


          // <PortfolioTitle>{portfolioTitle}</PortfolioTitle>