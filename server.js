const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(express.static('dist'))
app.use(bodyParser.json())
/* //use dis on development mode
app.use( (req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    '*'
  )
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})*/
var counter = 0
app.post(
  '/',
  (req, res) => {
    res.send({count: ++counter})
  }
)
app.listen(
  3000,
  () => console.log(
        'Back-end server listening on port 3000!'
  )
)
