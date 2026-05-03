const express = require('express')
const app = express()
const port = 3000

app.get('/about', (req, res) => {
  res.send('Hello to about page!')
})

app.get('/contact', (req, res) => {
  res.send('Hello to contact page!')
})

app.get('/projects', (req, res) => {
  res.send('Hello to projects page!')
})

app.get('/education', (req, res) => {
  res.send('Hello to education page!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


