import { useEffect, useState } from "react"
import { useUpdate } from "./useUpdate"

// ts声明两种不同的语法1
// 在第一种类型的基础上加某一种属性
// type newRecordItem = {
//     tags: number[],
//     note: string,
//     category: '-' | '+',
//     amount: number  
// }
// type RecordItem = newRecordItem &{
//   createdAt: string  
// }
// ts声明两种不同的语法2
// 在第一种类型的基础上减少某一种属性
type RecordItem ={
  tags: number[],
  note: string,
  category: '-' | '+',
  amount: number,
  createdAt: string //ISO 8601
}
type newRecordItem = Omit<RecordItem, 'createdAt'>
export const useRecords = ()=>{
  const [records, setRecords] = useState<RecordItem[]>([])
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('records',JSON.stringify(records))
  },[records])
  const addRecord = (newRecord:newRecordItem)=>{
    if(newRecord.amount <= 0) {
      alert('请输入金额')
      return false
    }
    if(newRecord.tags.length === 0){
      alert('请选择标签')
      return false
    }
    const record = {...newRecord, createdAt: new Date().toISOString()}
    setRecords([...records, record])
    return true
  }

  
  return {records,addRecord}
}