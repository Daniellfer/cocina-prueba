//importando el modelo de la base de datos
var objectUser = require('../models/recipes'); 

module.exports = function(app){

  app.get('/', function(request, response) {
    response.render('backend/recipes');
  });

}