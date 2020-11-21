import React from 'react'
import Layout from 'components/Layout'
import { useTags } from 'components/useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';

const TagList = styled.ol`
  font-size:16px;
  background-color:white;
  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 16px 12px 0;
    margin-left: 16px;
    display: flex;
    justify-content:space-between;
    align-items:center
  }
`

const Button = styled.button`
  font-size: 18px;
  border:none;
  border-radius:4px;
  background:#767676;
  padding: 8px 12px;
  color:#fff
`;

const Center = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`
const Space = styled.div`
  height:16px;
`

function Money() {
  const {tags, setTags} = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map(tag=>
        <li key={tag}>
          <span className="oneLine">{tag}大大大哒哒哒哒哒哒大大大哒哒哒哒哒哒大大大哒哒哒哒哒哒</span>
          <Icon name="right"></Icon>
        </li>)}
      </TagList>
      <Center>
        <Space></Space>
        <Space></Space>
        <Space></Space>
        <Button>新增标签</Button>
        <Space></Space>
      </Center>
    </Layout>
  );
}

export default Money