const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A todo must have a name'],
  },
  status: {
    type: String,
    required: [true, 'A todo must have a status'],
    default: 'ReadyToStart',
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: String,
    default: Date,
  },
})

const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo
