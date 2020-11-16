import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
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

const CategorySection:React.FC = ()=>{
  const categoryMap = {'+':'收入','-':'支出'}
  // type X = typeof categoryMap  声明categoryMap的类型 {'+':string, '-': string}
  // type Y = keyof X  声明categoryMap的key值的类型  '+' | '-'  
  // 下面这行代码由以上两行代码合并而来
  type Keys = keyof typeof categoryMap
  const [categoryList] = useState<Keys []>(['+','-'])
  const [category, setCategory] = useState('-')
  return (
    <Wrapper>
       <ul>
         {categoryList.map(c=>
          <li className={category === c ?'selected':''}
              onClick={()=>{setCategory(c)}} key={c}>{categoryMap[c]}</li>)}
          {/* <li className={category==='+'?'selected':''}
              onClick={()=>{setCategory('+')}}>收入</li>
          <li className={category==='-'?'selected':''}
              onClick={()=>{setCategory('-')}}>支出</li> */}
        </ul>
    </Wrapper>
  )
}
export {CategorySection}