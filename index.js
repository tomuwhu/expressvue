const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')
const sfop = {
    root: __dirname + '/private/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  }
express()
  .use( express.static(path.join(__dirname, 'public')) )
  .use( bodyParser.json() )
  .use(session({
        resave: true, saveUninitialized: true,
        secret: 'ABC123', cookie: { maxAge: 600000 }
  }))

  .get( '/', (req,res) => {
    res.sendFile('root.html',sfop)
  } )

  .listen(3000)
