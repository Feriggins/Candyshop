require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const methodOverride= require('method-override')

app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use('/places', require('./controllers/places'))
app.use(express.static("public"))


/*
  Frontend - HTML/CSS/JS - 
    React/Vue/Angular/Svelte
    
  Backend - Logic/Business Logic - Javascript, C#, Java, Python, PHP, Ruby, C++, Lisp
    API - Application Programming Interface
    REST - Representational State
      REQUEST - RESPONSE

      GET/POST/PUT/PATCH/DELETE
      CRUD - CREATE, READ, UPDATE, DELETE

      GET - READ
      POST - CREATE
      PUT - UPDATE
      DELETE - DELETE
      
      API CALLS

  Database - MySQL, MONGODB, Postgres
    SQL - Structured Query Langauge
      SELECT * FROM table
*/


// endpoint req - request- what info is being sent 
// res response 
app.get('/', function(req, res) {
  res.render('Home')
})

app.get('*', (req, res) => {
  res.render('error404')
})

app.listen(process.env.PORT)
