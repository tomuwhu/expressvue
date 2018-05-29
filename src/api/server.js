const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
var counter = 0
app.post('/', (req, res) => {
  console.log(req.body)
  res.send({count: ++counter})
})

app.get('/', (req, res) => {
  console.log('GET Access')
  res.send( { a: 'GET Access' } )
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
