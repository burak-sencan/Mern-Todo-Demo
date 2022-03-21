const app = require('./app')

//start server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
