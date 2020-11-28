// import { createID } from "lib/ClassCreateId"
import { createId } from "lib/createId"
import { useState } from "react"

type tag = {
  id: number,
  name: string
}
const defaultTags = [
  {id: createId(), name:'衣'},
  {id: createId(), name:'食'},
  {id: createId(), name:'住'},
  {id: createId(), name:'行'},
     // {id: (new createID()).value, name:'行'},  class 方案也可以
    // {id: (new createID()).addOneHundred(), name:'行'},
]
const useTags = () => {
  const [tags, setTags] = useState<tag []>(defaultTags)
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
  const updateTag = (id:number, obj:{name:string})=>{
    const index = findTagIndex(id)
    const tagsClone = JSON.parse(JSON.stringify(tags)) // 深拷贝tags，而不直接修改tags
    tagsClone.splice(index, 1,{id:id,name:obj.name})  // 修改拷贝的tags，并使用setTags更新
    setTags(tagsClone)
  }
  return {
    tags,setTags,findTag,updateTag
  }
}

export { useTags}