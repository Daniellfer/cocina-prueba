var express = require('express');
var app = express();
var mongoose = require ('mongoose');

var configDB = require('./config/database.js');

app.set('port', (process.env.PORT || 7000));

app.use(express.static(__dirname + '/public'));

// directorio para la carga de las vistas
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//directorio del archivo donde sestan las rutas
require('./app/frontend/routes.js')(app);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});