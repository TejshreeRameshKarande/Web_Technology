const express = require('express')
const app = express()
const port = 3000

// function CheckRoute(req, res, next){
//     console.log(req.url);
//     next();
// }

// app.use(CheckRoute)

// app.get('/about', (req, res) => {
//   res.send('Hello to about page!')
// })

app.use((req, res, next) => {
    console.log('Data Received', new Date())
    next()   // VERY IMPORTANT
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

