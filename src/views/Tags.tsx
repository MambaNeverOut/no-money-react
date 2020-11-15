import React from 'react'
import Layout from 'components/Layout'
import styled from 'styled-components'
import { TagsSection } from 'components/TagsSection';
import { CategorySection } from './CategorySection';
import { NoteSection } from './NoteSection';
import { NumberPadSection } from './NumberPadSection';


const MyLayout = styled(Layout)`
  display:flex;
  flex-direction:column;
`
function Tags() {
  return (
    <MyLayout>
       <TagsSection/>
        <NoteSection/>  
        <CategorySection/>
        <NumberPadSection/>
    </MyLayout>
  );
}

export default Tags