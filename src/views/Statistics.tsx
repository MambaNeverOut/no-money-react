import React, { useState } from 'react'
import Layout from 'components/Layout'
import { CategorySection } from './Tags/CategorySection';
import styled from 'styled-components';
import { useRecords } from 'hooks/useRecords';
import { useTags } from 'hooks/useTags';
import day from 'dayjs'

const CategoryWrapper = styled.div`
  background-color:#fff;
`
const Item = styled.div`
  display:flex;
  justify-content:space-between;
  background-color:#fff;
  font-size:18px;
  /* line-height:20px; */
  padding: 10px 16px;
  >.note{
    margin-right:auto;
    margin-left:16px;
    color:#999;
  }
`

function Statistics() {
  const [category,setCategory] = useState<'-'|'+'>('-') 
  const {records} = useRecords()
  const {getName} = useTags()
  const selectedRecords = records.filter(r => r.category === category) 
  return (
   <Layout>
     <CategoryWrapper>
      <CategorySection value={category} onChange={value=>setCategory(value)}/>
     </CategoryWrapper>
     {/* {JSON.stringify(records)} */}
    <div>
      {selectedRecords.map(r => {
        return <div key={r.createdAt}>
          <div className="time">
            {day(r.createdAt).format('YYYY年MM月DD日')}
          </div>
          <Item>
            <div className="tags">
              {r.tags.map(tagId=> <span key={tagId}>{getName(tagId)}</span>)}
            </div>
            {r.note && <div className="note">{r.note}</div>}
            <div className="amount">
              ￥{r.amount}
            </div>
          </Item>
        </div> 
      })} 
    </div>
   </Layout>
  );
}

export default Statistics