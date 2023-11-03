require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))
app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
// endpoint req - request- what info is being sent 
// res response 
app.get('/', function(req, res) {
  res.render('Home')
})

app.get('*', (req, res) => {
  res.render('error404')
})

app.listen(process.env.PORT)
