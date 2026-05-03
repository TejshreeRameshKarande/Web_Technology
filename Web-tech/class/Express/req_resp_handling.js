const express = require('express')
const app = express()
const port = 3000

app.get('/about', (req, res) => {
  res.send('Hello to about page!')
})

app.get('/user', (req, res) => {
  console.log(req.query.name)
  res.send(`Hello ${req.query.name}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})