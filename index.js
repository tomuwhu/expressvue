const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const fs = require('fs')
const path = require('path')
function render(req,res,target) {
  file = `
  <!DOCTYPE html>
  <html>
  <meta charset="UTF-8">
  <link type="text/css" rel="stylesheet" href="bv/bootstrap.min.css" />
  <link type="text/css" rel="stylesheet" href="bv/bootstrap-vue.css" />
  <script src="bv/axios.min.js"></script><script src="bv/vue.js"></script>
  <script src="bv/polyfill.min.js"></script><script src="bv/bootstrap-vue.js"></script>
  <body>`
  +fs.readFileSync(__dirname+'/private/'+target+'.vue')+
  `</body>
  </html>`
  res.send(file)
}
express()
  .use( express.static(path.join(__dirname, 'public')) )
  .use( bodyParser.json() )
  .use(session({
        resave: true, saveUninitialized: true,
        secret: 'ABC123', cookie: { maxAge: 600000 }
  }))

  .get( '/', (req,res) => render(req,res,'root') )

  .listen(3000)
