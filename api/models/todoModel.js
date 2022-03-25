const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A todo must have a name'],
  },
  complete: Boolean,
})

const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo