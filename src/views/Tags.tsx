import React from 'react'
import Layout from 'components/Layout'
import styled from 'styled-components'

const TagsSection = styled.section`
    background-color:#fff;
      padding: 12px 16px;
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
const NotesSection = styled.section`
  background-color:#f5f5f5;
  padding:0 16px;
  font-size:14px;
  >label{
    display: flex;
    align-items:center;
    >span{
      margin-right:16px;
      white-space:nowrap;
    }
    >input{
      border:none;
      background:none;
      display:block;
      width:100%;
      height:72px;
    }
  }
`
const CategorySection = styled.section``
const NumberPadSection = styled.section``

function Tags() {
  return (
    <Layout>
       <TagsSection>
        <ol>
          <li>衣</li> 
          <li>食</li> 
          <li>住</li> 
          <li>行</li> 
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <section>
        <NotesSection>
          <label htmlFor="">
            <span>备注</span>
            <input type="text" placeholder="在这里添加备注"/>
          </label>
          </NotesSection>  
      </section>
      <section>
        <CategorySection>
          <ul>
            <li>收入</li>
            <li>支出</li>
          </ul>
        </CategorySection>
      </section>
      <section>
        <NumberPadSection>
          <div>100</div>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>OK</button>
            <button>0</button>
            <button>.</button>
          </div>
        </NumberPadSection>
      </section>
    </Layout>
  );
}

export default Tags