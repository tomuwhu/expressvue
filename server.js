const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const sql = require('mysql').createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'test'
})

app.use( express.static('dist') )
app.use( bodyParser.json() )


sql.connect(error => console.log('MySQL Kapcsolódás sikertelen!'))

//use this only in development mode!
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
} )
//do nor use it in production mode!

var counter = 0
app.post(
    '/',
    (req, res) => {
        res.send({count: ++counter})
    }
)

app.get(
  '/mysqltest',
  (req, res) => {
      sql.query(
          'SELECT * FROM t1',
          (err, rows) => {
              if (err) {
                res.send(err)
              } else {
                res.send(rows)
              }
          }
      )
  }
)

app.listen(
    3000,
    () => console.log(
          'Back-end server listening on port 3000!'
    )
)
