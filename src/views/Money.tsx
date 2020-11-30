import React, { useState } from 'react'
import Layout from 'components/Layout'
import styled from 'styled-components'
import { TagsSection } from 'views/Tags/TagsSection';
import { CategorySection } from './Tags/CategorySection';
import { NoteSection } from './Tags/NoteSection';
import { NumberPadSection } from './Tags/NumberPadSection';


const MyLayout = styled(Layout)`
  display:flex;
  flex-direction:column;
`
type Category = '-' | '+'
function Money() {
  const [selected, setSelected] = useState({
    tags: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
  })
  type Selected = typeof selected
  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  return (
    <MyLayout>
      {/* {selected.tags}
      {selected.note}
      {selected.category}
      {selected.amount} // 遗留bug，小数点会被转换消失 */}
       <TagsSection value={selected.tags} 
                    onChange={(tags) => onChange({tags})}/>
        <NoteSection value={selected.note}
                     onChange={(note) => {onChange({note})}}/>  
        <CategorySection value={selected.category}
                         onChange={(category)=>{onChange({category})}}/>
        <NumberPadSection value={selected.amount}
                          onChange={(amount)=>{onChange({amount})}}
                          onOk={()=>{}}/>
    </MyLayout>
  );
}

export default Money