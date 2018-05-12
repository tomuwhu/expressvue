const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()
const path = require('path')
app
  .use( express.static(path.join(__dirname, 'public')) )
  .use( bodyParser.json() )
  .use(session({
        resave: true, saveUninitialized: true,
        secret: 'ABC123', cookie: { maxAge: 600000 }
  }))

app.get( '/', (req,res) => {
  res.sendFile('index.html')
} )

app.post( '/', (req,res) => {
  //console.log(req.body)
  if (!req.session.count) req.session.count=1
  else req.session.count++
  res.send( 'szeva: '+req.session.count )
})

app.listen(3000)
