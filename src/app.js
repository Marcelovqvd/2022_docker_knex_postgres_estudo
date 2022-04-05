const express = require('express')
const UsersController = require('./controller/usersController')

const knex = require('knex')
const knexfile = require('../knexfile')

const database = knex(knexfile);

const app = express()

app.use(express.json())
const usersController = new UsersController()

app.get('/users', (req, res) => {
  const getAll = database.table()
  console.log(getAll)
  return res.json({get: getAll})
})

app.listen(3333, () => console.log('Running at 3333'))