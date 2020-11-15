import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'

const Wrapper = styled.div`
  height:100vh;
  display:flex;
  flex-direction:column;
`;
const Main = styled.div`
  flex-grow:1;
  overflow:auto
`
/* type Props ={
  children:HTMLElement
} */
const Layout = (props:any)=>{
  return (
    <Wrapper>
      <Main className={props.className}>
      {props.children}
      </Main>
      <Nav></Nav>
    </Wrapper>
  )
}

export default Layout