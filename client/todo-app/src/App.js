import { useState, useEffect } from 'react'
import './App.css'
const API = 'http://127.0.0.1:3000/api/v1/'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    getTodos()
  }, [])

  const getTodos = () => {
    fetch(API + 'todos')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.data.todos)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const addNewTodo = async () => {
    if (newTodo !== '') {
      const data = await fetch(API + 'todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newTodo,
        }),
      }).then((res) => res.json())

      setTodos([...todos, data])
      setNewTodo('')

      console.log(newTodo)
    }
  }
  return (
    <div className="App flex">
      <div className="app_header flex">
        <div>
          <h1>Todo App</h1>
          <h4>Remaining Session Time</h4>
          <p>12:42</p>
        </div>
        <div>
          <h4>Log Out</h4>
        </div>
      </div>
      <div className="app_content flex">
        <div className="app_content-add flex">
          <input
            type="text"
            placeholder="New Todo"
            onChange={(e) => setNewTodo(e.target.value)}
          />

          <button onClick={() => addNewTodo()}>add</button>
        </div>
        <div className="app_content-todos flex">
          <div className="todo_section ready_to_start">
            <h3 className="todo_header">Ready to start</h3>
            <div className="todo_content">
              {todos.map((todo) =>
                todo.status === 'ReadyToStart' ? (
                  <p key={todo._id}>{todo.name}</p>
                ) : null
              )}
            </div>
          </div>
          <div className=" todo_section in_progress">
            <h3 className="todo_header">In progress</h3>
            <div className="todo_content">
              {todos.map((todo) =>
                todo.status === 'InProgress' ? (
                  <p key={todo._id}>{todo.name}</p>
                ) : null
              )}
            </div>
          </div>
          <div className="todo_section done">
            <h3 className="todo_header">Done</h3>
            <div className="todo_content">
              {todos.map((todo) =>
                todo.status === 'Done' ? (
                  <p key={todo._id}>{todo.name}</p>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
