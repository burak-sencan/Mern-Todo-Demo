const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const todoRouter = require('./routes/todoRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()



//Middlewares  
if (process.env.NODE_ENV === "development") {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use(cors())

/*app.js url ==> routes ==> controller */
app.use('/api/v1/todos', todoRouter)
app.use('/api/v1/users', userRouter)

module.exports = app
