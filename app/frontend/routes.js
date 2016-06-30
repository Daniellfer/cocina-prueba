var objectRecipe = require('../models/recipes');
module.exports = function(app){

//mediante get se esta dando respuesta a la solicitud del usuario
	app.get('/', function(req, res) {
		objectRecipe.find({},function(err, objectRecipe) {
	      if (err) {
	        return res.send(err);
	      }
	      res.render('frontend/index.ejs',{
	        objectRecipe      : objectRecipe,
	        user              : req.user
	      });
	    });

	});

	app.get('/receta', function(request, response) {
	response.render('frontend/recipe');
	});

}