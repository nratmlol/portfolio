import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"


const Content = styled.div`
  margin-top: 1.45rem;
  display: flex;
  // flex: 1;
  justify-content: space-between;
`
const Introduce = styled.div`
  flex: 1;
  padding: 0 1.45rem;
  border-right: solid 1px #EEEEEE;
`

const HistoryImg = styled.div`  
  
  width: 100%;
  margin: 0 1.45rem;
  // padding: 0 1.45rem;
`

const IndexPage = ({ data }) => (
  <Layout pageTitle="-About">
  
    <HistoryImg>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </HistoryImg>
    <Content>
      <Introduce>
        <p>0-18: ITに興味を持った平凡な少年</p>
        <p>18-22: 大手電子部品メーカーにて、社内の業務支援システムの設計・開発を担当</p>
        <p>22: 自身のスキルアップの為に退職</p>
        <p>22-23: フリーランスSEとして活動</p>
      </Introduce>
      <Introduce>
        <p>
          初めまして、nratmlolと申します。琵琶湖が存在する県にて生まれ育ちました。
          子供の頃からゲームやロボットなどの機械に興味を持ち、今でもテクノロジーに触れるとワクワクが止まりません。
          いつまでたっても心は少年です。
        </p>
        <p>
          Python, React.js, VB, VBAを用いた開発を得意とし、Webエンジニアとして活動しています。
        </p>
        <p>
          開発可能: Pythonを用いたWebスクレイピング, LINE-Botの開発, React(Gatsby)を用いたWebサイトの開発, Office(VBA)を用いたマクロの開発・修正
        </p>
      </Introduce>
    </Content>
  </Layout>
)

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "history.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage