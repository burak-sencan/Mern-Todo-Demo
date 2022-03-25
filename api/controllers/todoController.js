const Todo = require('./../models/todoModel.js')

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find()

    res.status(200).json({
      status: 'succes',
      result: todos.length,
      data: { todos },
    })
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    })
  }
}

exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)
    res.status(200).json({
      status: 'succes',
      data: {
        todo,
      },
    })
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    })
  }
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
    res.status(400).json({
      status: 'fail',
      message: 'Invalıd data send!',
    })
  }
}

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    res.status(200).json({
      status: 'success',
      data: {
        todo,
      },
    })
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    })
  }
}

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: 'success',
      data: null,
    })
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      data: error,
    })
  }
}
