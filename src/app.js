const express = require('express')

const app = express()
app.use(express.json())

app.get('/users', (req, res) => {
  return res.json({msg: 'get'})
})

app.listen(3333, () => console.log('Running at 3333'))