const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
app.use( express.static(path.join(__dirname, 'public')) )
app.use( bodyParser.json() )

app.get( '/', (req,res) => {
  res.sendFile('index.html')
} )

app.post( '/', (req,res) => {
  console.log(req.body)
  res.send( 'szeva' )
})

app.listen(3000)
