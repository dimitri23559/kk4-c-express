const express = require('express')
const app = express()
const userrouter = require('./router/users')


const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/profile', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(userrouter)

app.listen(port, () => {
  console.log(`Example App listening on port ${port}`)
})