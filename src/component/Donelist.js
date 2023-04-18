import React from 'react'

function Donelist({ todo, setTodo }) {

  const deletebtn = (listId) => {
    setTodo(todo.filter((i) => i.id !== listId))
  }

  const cancelbtn = (id) => {
    setTodo(todo.map((list) => list.id === id ? { ...list, isDone: false } : list))
  }

  return (
    <div className='worklist'>
      <div>
        <h2>Done..!🎉</h2>
      </div>

      <div className='listing'>
        {todo.map((list) => list.isDone === true ? (
          <div className='box'>
            <div key={list.id}>
              <h3>{list.title}</h3>
              <p>{list.body}</p>
              <div className='btn'>
                <button className='deletebtn' onClick={() => deletebtn(list.id)}>삭제하기</button>
                <button className='completebtn' onClick={() => cancelbtn(list.id)}>취소</button>
              </div>
            </div>
          </div>
        ) : null
        )}
      </div>
    </div >
  )
}

export default Donelist