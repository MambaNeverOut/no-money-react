import styled from 'styled-components'
import React from 'react';
import { NavLink} from 'react-router-dom'
import Icon from 'components/Icon'
// import x from 'icons/tags.svg'

// console.log(x);

const NavWrapper = styled.nav`
  line-height:24px;
  box-shadow:0 0 3px rgba(0,0,0,0.25);
  >ul{
    display:flex;
    >li{
      width:33.33%;
      text-align:center;
      >a{
      display:flex;
      padding:4px 0;
      align-items:center;
      flex-direction:column;
      .icon{
        width:24px;
        height: 24px;
      }
      &.selected{
        color:red;
        .icon{
          fill:red;
        }
      }
    }
  }
}`

const Nav = ()=>{
  return (
    <NavWrapper>
    <ul>
      <li>
        <NavLink to="/tags" activeClassName="selected">
        <Icon name="tags"></Icon>
          标签页
        </NavLink>
      </li>
      <li>
        <NavLink to="/money" activeClassName="selected">
          <Icon name="money"></Icon>
          记账页
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics" activeClassName="selected">
          <Icon name="statistics"></Icon>
          统计页
        </NavLink>
      </li>
    </ul>
  </NavWrapper>
  )
}

export default Nav
