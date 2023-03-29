var express = require('express');
var bodyParser = require('body-parser');
require('./database');
var app = express();
const config= require('./config')

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('port', process.env.PORT || config.PORT);
app.get('/', function(req, res){
	res.send('holi')
});

app.listen(config.PORT, ()=>{

    console.log("server on port "+config.PORT);
 })