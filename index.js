var express = require('express');
require('dotenv').config()
var bodyParser = require('body-parser');
require('./database');
var app = express();
const path= require('path');
const config= require('./config')

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('port', process.env.PORT || config.PORT);


app.set('views', path.join(__dirname, './public/views'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,"public")));

app.get('/', function(req, res){
	res.render('index')
});

app.listen(config.PORT, ()=>{

    console.log("server on port "+config.PORT);
 })