import React, { useState } from 'react'
import "./App.css"
import Worklist from "./component/Worklist"
import Donelist from "./component/Donelist"
import Layout from "./component/Layout"


function App() {

  const [todo, setTodo] = useState([
    { id: 0, title: "테스트입니다1", body: "테스트입니다1", isDone: false },
    { id: 1, title: "테스트입니다2", body: "테스트입니다2", isDone: true }
  ])

  return (
    <div className='body'>
      <div className='head'>
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <Layout todo={todo} setTodo={setTodo} />
      <Worklist todo={todo} setTodo={setTodo} />
      <Donelist todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default App