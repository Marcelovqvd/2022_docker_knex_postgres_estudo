const express = require('express')
const UsersController = require('./controller/usersController')

const app = express()

app.use(express.json())
const usersController = new UsersController()

app.get('/users', async (req, res) => {
  const data = await usersController.getAll()
  return res.json(data)
})

app.listen(3333, () => console.log('Running at 3333'))