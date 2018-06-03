const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const sql = require('mysql').createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'test'
})
app.use( express.static('dist') )
app.use( bodyParser.json() )

var sql_ok
sql.connect( error => {
    if (error) console.log('MySQL Kapcsolódás sikertelen!')
    else {
      sql_ok=true
      console.log('MySQL szerver rendben.')
    }
} )

var db
MongoClient
    .connect(
        'mongodb://localhost:27017/animals',
        (err, client) => {
            if (err) console.log('MongoDB Kapcsolódás sikertelen!')
            else {
              db = client.db('animals')
              console.log('MongoDB szerver rendben.')
            }
        }
    )

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
      if (sql_ok)
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
      else {
        res.send({error:'MySQL connection failled!'})
      }
  }
)

app.get(
  '/mongotest',
  (req, res) => {
      if (db)
      db.collection('mammals')
        .find()
        .toArray(
          (err, result) => {
              if (err) {
                res.send(err)
              } else {
                res.send(result)
              }
          }
        )
      else {
        res.send({error:'MongoDB connection failled!'})
      }
  }
)

app.listen(
    3000,
    () => console.log(
          'Back-end szerver elérhető a http://localhost:3000 webcímen'
    )
)
