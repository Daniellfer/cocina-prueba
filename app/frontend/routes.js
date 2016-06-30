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

	app.get('/receta/:id', function(req, res) {
		var id=req.param("id");
		objectRecipe.findOne({"_id":id},function(err, objectRecipe) {
	      if (err) {
	        return res.send(err);
	      }
	      console.log(objectRecipe.name);
	      res.render('frontend/recipe.ejs',{
	        objRec      : objectRecipe,
	        user              : req.user
	      });
	    });
	});
}