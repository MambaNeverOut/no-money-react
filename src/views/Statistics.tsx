import React, { ReactNode, useState } from 'react'
import Layout from 'components/Layout'
import { CategorySection } from './Tags/CategorySection';
import styled from 'styled-components';
import { RecordItem, useRecords } from 'hooks/useRecords';
import { useTags } from 'hooks/useTags';
import day from 'dayjs'


const CategoryWrapper = styled.div`
  background-color:#fff;
`
const Header = styled.h3`
  font-size:18px;
  line-height:20px;
  padding: 10px 16px;
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
  const hash:{[K:string]:RecordItem[]} ={}
  const selectedRecords = records.filter(r => r.category === category) 
  selectedRecords.map(r=>{
    const key = day(r.createdAt).format('YYYY年MM月DD日')
    if(!(key in hash)){
      hash[key] = []
    }
    hash[key].push(r)
    return false
  })
  const array = Object.entries(hash).sort((a,b)=>{
    if(a[0] === b[0]) return 0
    if(a[0] > b[0]) return -1
    if(a[0] < b[0]) return 1
    return 0
  })
  
  return (
   <Layout>
     <CategoryWrapper>
      <CategorySection value={category} onChange={value=>setCategory(value)}/>
     </CategoryWrapper>
     {array.map(([date, records])=>
        <div key="records">
          <Header>{date}</Header>
          <div>
          {records.map(r => {
            return <div key={r.createdAt}>
              <Item>
                <div className="tags">
                  {r.tags.map(tagId=> <span key={tagId}>{getName(tagId)}</span>)
                          .reduce((result, span, index, array)=>result.concat(
                            index < array.length-1 ?[span, '，']:[span]),[] as ReactNode[])
                  }
                </div>
                {r.note && <div className="note">{r.note}</div>}
                <div className="amount">
                  ￥{r.amount}
                </div>
              </Item>
            </div> 
          })} 
        </div>
      </div>
     )}
   
   </Layout>
  );
}

export default Statistics