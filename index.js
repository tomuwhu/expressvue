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

  .get( '/', (req,res) => {
    res.sendFile('index.html')
  } )

  .listen(3000)
