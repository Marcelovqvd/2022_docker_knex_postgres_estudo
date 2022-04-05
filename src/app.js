const express = require('express')
const UsersController = require('./controller/usersController')

const app = express()

app.use(express.json())
const usersController = new UsersController()

app.get('/users', (req, res) => {
  usersController.getAll()
  
  return res.json()
})

app.listen(3333, () => console.log('Running at 3333'))