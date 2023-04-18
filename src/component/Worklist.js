import React from 'react'
import "./WD.css"

function Worklist({ todo, setTodo }) {

  const deletebtn = (id) => {
    setTodo(todo.filter((i) => i.id !== id))
  }

  const donebtn = (id) => {
    setTodo(todo.map((list) => list.id === id ? { ...list, isDone: true } : list))
  }

  return (
    <div className='worklist'>
      <div>
        <h2>Working..🔥</h2>
      </div>

      <div className='listing'>
        {todo.map((list) => list.isDone === false ? (
          <div className='box'>
            <div key={list.id}>
              <h3>{list.title}</h3>
              <p>{list.body}</p>
              <div className='btn'>
                <button className='deletebtn' onClick={() => deletebtn(list.id)}>삭제하기</button>
                <button className='completebtn' onClick={() => donebtn(list.id)}>완료</button>
              </div>
            </div>
          </div>
        ) : null
        )}
      </div>
    </div >
  )
}

export default Worklist