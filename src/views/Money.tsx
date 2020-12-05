import React, { useState } from 'react'
import Layout from 'components/Layout'
import styled from 'styled-components'
import { TagsSection } from 'views/Tags/TagsSection';
import { CategorySection } from './Tags/CategorySection';
import { NoteSection } from './Tags/NoteSection';
import { NumberPadSection } from './Tags/NumberPadSection';
import { useRecords } from 'hooks/useRecords';


const MyLayout = styled(Layout)`
  display:flex;
  flex-direction:column;
`
const CategoryWrapper = styled.div`
  background-color:#c5c5c5;
`
type Category = '-' | '+'

const defaultFormData = {
  tags: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
}
function Money() {
  const [selected, setSelected] = useState(defaultFormData)
  const {records,addRecord} = useRecords()
  console.log(records);
  
  type Selected = typeof selected
  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  const submit = ()=>{
    
    if(addRecord(selected)){

      alert('保存成功')
      setSelected(defaultFormData)
    }
  }
  return (
    <MyLayout>
       <TagsSection value={selected.tags} 
                    onChange={(tags) => onChange({tags})}/>
        <NoteSection value={selected.note}
                     onChange={(note) => {onChange({note})}}/>  
        <CategoryWrapper>
          <CategorySection value={selected.category}
                         onChange={(category)=>{onChange({category})}}/>
        </CategoryWrapper>
        <NumberPadSection value={selected.amount}
                          onChange={(amount)=>{onChange({amount})}}
                          onOk={submit}/>
    </MyLayout>
  );
}

export default Money