const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const bpo = { extended: true, limit:300000 }
app.use( express.static(path.join(__dirname, 'public')) )
app.use( bodyParser.urlencoded(bpo) )

app.get( '/', (req,res) => {
  res.sendFile('index.html')
} )

app.listen(3000)
