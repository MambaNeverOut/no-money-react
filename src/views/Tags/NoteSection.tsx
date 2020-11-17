import React, { useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color:#f5f5f5;
  padding:0 16px;
  font-size:14px;
  >label{
    display: flex;
    align-items:center;
    >span{
      margin-right:16px;
      white-space:nowrap;
    }
    >input{
      border:none;
      background:none;
      display:block;
      width:100%;
      height:72px;
    }
  }
`
type Props = {
  value: string,
  onChange:(value:string)=>void
}

const NoteSection:React.FC<Props> = (props) =>{
  // const [note, setNote] = useState('')
  const note = props.value
 const refInput = useRef<HTMLInputElement>(null)  
 const onBlur = ()=>{
   if(refInput.current !== null){
      props.onChange(refInput.current.value) 
   }
   
 }
  return (
    <Wrapper>
       <label>
        <span>备注</span>
        {/*受控组件： <input type="text" value={note} onChange={e=>setNote(e.target.value)} placeholder="在这里添加备注"/> */}
        <input type="text" placeholder="在这里添加备注" ref={refInput} defaultValue={note} onBlur={onBlur}/>
      </label>
    </Wrapper>
  )
}

export {NoteSection}