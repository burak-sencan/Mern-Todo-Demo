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

exports.getAllTodos = (req, res) => {
  res.status(200).json({
    status: 'succes',
    result: todos.length,
    data: { todos },
  })
}

exports.getTodo = (req, res) => {
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

exports.createTodo = (req, res) => {
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

exports.updateTodo = (req, res) => {
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

exports.deleteTodo = (req, res) => {
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
