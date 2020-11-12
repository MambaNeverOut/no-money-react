import styled from 'styled-components';

const CategorySection = styled.section`
  >ul{
    display:flex;
    background-color:#c5c5c5;
    >li{
      font-size:24px;
      padding:  18px 0;
      width:50%;
      text-align:center;
      position: relative;
      &.selected::after{
        content:'';
        display:block;
        position: absolute;
        left:0;
        bottom:0;
        width:100%;
        height:3px;
        background-color:#333;
      }
    }
  }
`
export {CategorySection}