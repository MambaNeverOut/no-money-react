// import { createID } from "lib/ClassCreateId"
import { createId } from "lib/createId"
import { useState } from "react"

type tag = {
  id: number,
  name: string
}

const useTags = () => {
  const [tags, setTags] = useState<tag []>([
    {id: createId(), name:'衣'},
    {id: createId(), name:'食'},
    {id: createId(), name:'住'},
    {id: createId(), name:'行'},
    // {id: (new createID()).value, name:'行'},  class 方案也可以
    // {id: (new createID()).addOneHundred(), name:'行'},
  ])
  return {
    tags,setTags
  }
}

export { useTags}