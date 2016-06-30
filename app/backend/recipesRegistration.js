var objectUser = require('../models/recipes'); //Import database model to count users in control-panel


module.exports = function(app){

  app.get('/lugares', function(request, response) {
    response.render('backend/recipes');
  });

}