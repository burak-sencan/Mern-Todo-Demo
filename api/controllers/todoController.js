const Todo = require('./../models/todoModel.js')

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

  // res.status(200).json({
  //   status: 'succes',
  //   data: {
  //     todo,
  //   },
  // })
}

exports.createTodo = async (req, res) => {
  try {
    // const newTodo = new Todo({})
    // newTodo.save()
    const newTodo = await Todo.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        todo: newTodo,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'fail',
      message: error,
    })
  }
}

exports.updateTodo = (req, res) => {
  res.status(200).json({
    status: 'success',
    // data: {
    //   todo: '<Update Todo Here...>',
    // },
  })
}

exports.deleteTodo = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  })
}
