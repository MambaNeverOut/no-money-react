import styled from 'styled-components';

const TagsSection = styled.section`
 background-color:#fff;
    padding: 12px 16px;
    flex-grow:1;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-end;
  >ol{
    margin: 0 -12px;
    >li{
      display: inline-block;
      margin: 8px 12px;
      background-color:#D9D9D9;
      border-radius:18px;
      padding: 3px 17px;
      font-size:14px;
    }
  }
  >button{
    margin-top:8px;
    background:none;
    border:none;
    border-bottom:1px solid #333;
    padding:2px 4px;
    color:#666;
  }
`
export {TagsSection}