import React from "react"
import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  width: 100%;
  height: 72px;
  border-top: solid 1px #EEEEEE;
  background-color: #ffcb4f;
  color: white;
`

export default () => (
  <Wrapper>
    Copyright © {new Date().getFullYear()}, nratmlol.
  </Wrapper>
)

