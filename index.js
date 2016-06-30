var express = require('express');
var app = express();
var mongoose = require ('mongoose');

app.set('port', (process.env.PORT || 7000));

var configDB = require('./config/database.js');

mongoose.connect(configDB.url,
        { server: { auto_reconnect: true } }, function(err, db) {
        	console.log("DASDS " + err  + " ");
        	console.log('Conectado con éxito a la BD');
});

app.use(express.static(__dirname + '/public'));

// directorio para la carga de las vistas
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//directorio del archivo donde sestan las rutas
require('./app/frontend/routes.js')(app);
require('./app/backend/recipe.js')(app);
require('./app/backend/recipesRegistration.js')(app);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});