import React, { useState } from 'react'

function Layout({ todo, setTodo }) {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [id, setId] = useState(0)

    const Addbody = (e) => {
        e.preventDefault();
        const newTodo = {
            id: todo.length + 1,
            title,
            body,
            isDone: false
        }
        setTodo([...todo, newTodo])
        setTitle("")
        setBody("")
        setId(0)
    }

    return (
        <div>
            <form onSubmit={Addbody}>
                <div className='inputbody'>
                    <div className='inputTitle'>
                        <div className='title'>
                            제목&nbsp;
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            내용&nbsp;
                            <input
                                type="text"
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <button className='addbtn'>추가하기</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Layout