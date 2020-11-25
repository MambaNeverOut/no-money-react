import { Button } from 'components/Button';
import Icon from 'components/Icon';
import { Input } from 'components/Input';
import Layout from 'components/Layout';
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
`
const Tag:React.FC = (props)=>{
  const {tags, setTags, findTag} = useTags()
  let { id } = useParams<Params>()
  console.log(id);
  const tag = findTag(parseInt(id))
  return (
    <Layout>
      <TopBar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      <div>
       <Input label="标签"/>
      </div>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  )
}

export { Tag }