import React from 'react'
import './App.css'

const Modal = (props) => {
  console.log(props)

  return (
    <div className='modal'>
        <h4>제목: {props.post[props.postnum].title}</h4>
        <p>날 짜: {props.post[props.postnum].date}</p>
        <p>상세내용: {props.post[props.postnum].content}</p>

        <button onClick={()=>{
          props.setModal(false);
        }}>창 닫기</button>
    </div>
  )
}

export default Modal