import React from 'react'
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