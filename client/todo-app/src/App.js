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
    <div className="App">
      <h1>Todo App</h1>
      {todos.map(todo=>(
        <h3 key={todo._id}>{todo.name}, {todo.status}, {todo.date}</h3>
      ))}
    </div>
  )
}

export default App
