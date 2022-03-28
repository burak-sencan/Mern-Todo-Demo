import { useState, useEffect } from 'react'
import './App.css'
const axios = require('axios').default
const API = 'http://127.0.0.1:3000/api/v1/'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodos, setNewTodos] = useState('')

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
  return (
    <div className="App flex">
      <div className="app_header flex">
        <div>
          <h1>Todo App</h1>
          <h4>Oturum Süresi</h4>
          <p>12:42</p>
        </div>
        <div>
          <h4>Çıkıs Yap</h4>
        </div>
      </div>
      <div className="app_content flex">
        <div className="app_content-add flex">
          <input type="text" name="" id="" />
          <button>add</button>
        </div>
        <div className="app_content-todos flex">
          <div className="todo_section ready_to_start">
            <h3 className='todo_header'>Ready to start</h3>
            <div className='todo_content'>
              {todos.map((todo) => (
                <p key={todo._id}>
                  {todo.name}, {todo.status}
                </p>
              ))}
            </div>
          </div>
          <div className=" todo_section in_progress">
            <h3 className='todo_header'>In progress</h3>
            <div className='todo_content'>
              {todos.map((todo) => (
                <p key={todo._id}>
                  {todo.name}, {todo.status}
                </p>
              ))}
            </div>
          </div>
          <div className="todo_section done">
            <h3 className='todo_header'>Done</h3>
            <div className='todo_content'>
              {todos.map((todo) => (
                <p key={todo._id}>
                  {todo.name}, {todo.status}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
