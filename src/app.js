const express = require('express')
const database = require('./database')

const app = express()

app.use(express.json())

app.get('/users', (req, res) => {
  return res.send()
})

app.listen(3333, () => console.log('Running at 3333'))