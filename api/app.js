const express = require('express')

const app = express()

app.use(express.json())

//temp data
const todos = [
  {
    id: 1,
    name: 'todo_1',
    complete: false,
  },
  {
    id: 2,
    name: 'todo_2',
    complete: false,
  },
]

const getAllTodos = (req, res) => {
  res.status(200).json({
    status: 'succes',
    result: todos.length,
    data: { todos },
  })
}

const getTodo = (req, res) => {
  const id = req.params.id * 1
  const todo = todos.find((el) => el.id === id)

  if (!todo) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    })
  }

  res.status(200).json({
    status: 'succes',
    data: {
      todo,
    },
  })
}

const createTodo = (req, res) => {
  console.log(req.body)
  const newID = todos[todos.length - 1].id + 1
  const newTodo = Object.assign(
    { id: newID },
    req.body
  )
  todos.push(newTodo)
  console.log(todos)
  res.status(201).json({
    status: 'success',
    data: {
      todo: newTodo,
    },
  })
}

const updateTodo = (req, res) => {
  const id = req.params.id * 1
  const todo = todos.find((el) => el.id === id)

  if (!todo) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    })
  }

  res.status(200).json({
    status: 'success',
    data: {
      todo,
    },
  })
}

const deleteTodo = (req, res) => {
  const id = req.params.id * 1
  const todo = todos.find((el) => el.id === id)

  if (!todo) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    })
  }

  res.status(204).json({
    status: 'success',
    data: null,
  })
}
// app.get('/api/v1/todos', getAllTodos)
// app.post('/api/v1/todos', createTodo)
// app.get('/api/v1/todos/:id', getTodo)
// app.patch('/api/v1/todos/:id', updateTodo)
// app.delete('/api/v1/todos/:id', deleteTodo)

app
  .route('/api/v1/todos')
  .get(getAllTodos)
  .post(createTodo)
app
  .route('/api/v1/todos/:id')
  .get(getTodo)
  .patch(updateTodo)
  .delete(deleteTodo)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
