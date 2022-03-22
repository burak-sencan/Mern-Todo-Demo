const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const app = require('./app')

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)

mongoose
  // .connect(process.env.DATABASE_LOCAL, {
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((con) => console.log('DB connection succesful'))

//Model
const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A todo must have a name'],
  },
  complete: Boolean,
})

const Todo = mongoose.model('Todo',todoSchema)

//start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
