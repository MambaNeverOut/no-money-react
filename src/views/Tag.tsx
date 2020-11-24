import { useTags } from 'components/useTags';
import React from 'react';
import { useParams } from 'react-router-dom';

type Params = {
  id: string
}

const Tag:React.FC = (props)=>{
  const {tags, setTags, findTag} = useTags()
  let { id } = useParams<Params>()
  console.log(id);
  const tag = findTag(parseInt(id))
  return (
    <div>{tag.name}</div>
  )
}

export { Tag }