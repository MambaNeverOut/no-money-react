import { Input } from 'components/Input';
import React, { ChangeEventHandler, useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color:#f5f5f5;
  padding:14px 16px;
  font-size:14px;
`
type Props = {
  value: string,
  onChange:(value:string)=>void
}

const NoteSection:React.FC<Props> = (props) =>{
  // const [note, setNote] = useState('')
  const note = props.value
//  const refInput = useRef<HTMLInputElement>(null)  

 const onChange:ChangeEventHandler<HTMLInputElement> = (e)=>{
  //  if(refInput.current !== null){
  //     props.onChange(refInput.current.value) 
  //  }
   props.onChange(e.target.value)
 }
  return (
    <Wrapper>
        {/*受控组件： <input type="text" value={note} onChange={e=>setNote(e.target.value)} placeholder="在这里添加备注"/> */}
        {/* <input type="text" placeholder="在这里添加备注" ref={refInput} defaultValue={note} onBlur={onBlur}/> */}
        <Input label="备注"  type="text" placeholder="标签名" value={note} onChange={onChange}/>
        {/* // 非受控组件无法使用ref属性，此处使用受控组件，传入value和onChange事件即可 */}
    </Wrapper>
  )
}

export {NoteSection}