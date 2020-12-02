import { useTags } from 'hooks/useTags';
import { createId } from 'lib/createId';
import React, { useState } from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
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
      &.selected{
        background-color:green
      }
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
type Props = {
  value: number[],
  onChange: (value:number[]) => void
}
const TagsSection:React.FC<Props>=(props)=>{
  const {tags,setTags,addTag} = useTags()
  // const [selectedTags,setSelectedTag] = useState<string[]>([])
  
  const onToggleTag = (tag:number)=>{
    const index = props.value.indexOf(tag)
    if(index < 0){
      props.onChange([...props.value, tag])
    }else{
      props.onChange(props.value.filter(t=>t!==tag))      
    }
  }
  const getClass = (tag:number)=> props.value.indexOf(tag)>=0?'selected':''
  return (
    <Wrapper>
      <ol>
        {tags.map(tag=>
          <li key={tag.id} onClick={()=>{onToggleTag(tag.id)}} className={getClass(tag.id)}>{tag.name}</li>
          )}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}

export {TagsSection}