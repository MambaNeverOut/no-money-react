// import { createID } from "lib/ClassCreateId"
import { useUpdate } from "hooks/useUpdate"
import { createId } from "lib/createId"
import { useEffect, useRef, useState } from "react"

type tag = {
  id: number,
  name: string
}
// const defaultTags = [
//   {id: createId(), name:'衣'},
//   {id: createId(), name:'食'},
//   {id: createId(), name:'住'},
//   {id: createId(), name:'行'},
//      // {id: (new createID()).value, name:'行'},  class 方案也可以
//     // {id: (new createID()).addOneHundred(), name:'行'},
// ]
const useTags = () => {
  const [tags, setTags] = useState<tag []>([])
  useEffect(()=>{
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if(localTags.length === 0){
      localTags = [
        {id: createId(), name:'衣'},
        {id: createId(), name:'食'},
        {id: createId(), name:'住'},
        {id: createId(), name:'行'},
      ]
    }
    setTags(localTags)
  },[])
  useUpdate(()=> window.localStorage.setItem('tags',JSON.stringify(tags)),[tags])
  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0]  
  const findTagIndex = (id:number)=>{
    let result = -1 
    for(let i =0;i<tags.length; i++){
      if(tags[i].id === id){
        result = i
        break;
      }
    }
    return result
  }
  const addTag= ()=>{
    const tagName:string|undefined = window.prompt('新标签的名称为')?.trim()
    if(tagName === ''|| tagName === undefined){
      alert('标签名不能为空')
      return false;
    }
    if(tagName !== null){
      setTags([...tags, {id:createId(),name:tagName}])
    }
  }
  const updateTag = (id:number, {name}:{name:string})=>{
    // const index = findTagIndex(id)
    // const tagsClone = JSON.parse(JSON.stringify(tags)) // 深拷贝tags，而不直接修改tags
    // tagsClone.splice(index, 1,{id:id,name:obj.name})  // 修改拷贝的tags，并使用setTags更新
    // setTags(tagsClone)


   setTags(tags.map(tag=>{
      return tag.id===id? {id:id, name:name}:tag
    }))
  }
  const deleteTag = (id:number)=>{
    // const index = findTagIndex(id)
    // const tagsClone = JSON.parse(JSON.stringify(tags))
    // tagsClone.splice(index, 1)
    // setTags(tagsClone)

    setTags(tags.filter(tag=>tag.id !== id))
  }
  const getName = (id:number)=>{
    const tag = tags.filter(tag=>tag.id===id)[0]
    return tag?tag.name:''
  }
  return {
    tags,setTags,findTag,addTag,updateTag,deleteTag
    ,getName
  }
}

export { useTags}