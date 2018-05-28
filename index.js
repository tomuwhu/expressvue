const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')
express()
  .use( express.static(path.join(__dirname, 'public')) )
  .use( bodyParser.json() )
  .use(session({
        resave: true, saveUninitialized: true,
        secret: 'ABC123', cookie: { maxAge: 600000 }
  }))

  .get( '/cucc', (req,res) => {
    res.sendFile(__dirname+'/private/kiskutya.html')
  } )

  .listen(3000)
