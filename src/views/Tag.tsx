import { Button } from 'components/Button';
import { Center } from 'components/Center';
import Icon from 'components/Icon';
import { Input } from 'components/Input';
import Layout from 'components/Layout';
import { Space } from 'components/Space';
import { useTags } from 'components/useTags';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

type Params = {
  id: string
}
const TopBar = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  line-height:20px;
  padding:14px;
  background-color:white;
`
const InputWrapper = styled.div`
  background-color:white;
  padding: 0 16px;
  margin-top: 8px;
`
const Tag:React.FC = (props)=>{
  const { findTag, updateTag} = useTags()
  let { id } = useParams<Params>()
  const tag = findTag(parseInt(id))
  const onChange = (e:any)=>{
    updateTag(tag.id,{name:e.target.value})
  }
  
  return (
    <Layout>
      <TopBar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      <InputWrapper>
       <Input label="标签名" type="text" placeholder="标签名" value={tag.name} onChange={onChange}/>
      </InputWrapper>
      <Space></Space>
      <Space></Space>
      <Space></Space>
      <Center>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  )
}

export { Tag }