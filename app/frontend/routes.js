var objectRecipe = require('../models/recipes');
var objectScore = require('../models/scores');
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

			/*objectScore score =new objectScore();
			score.score =4;
			score.save();*/

		var id=req.param("id");
		objectRecipe.findOne({"_id":id},function(err, objectRecipe) {
	      if (err) {
	        return res.send(err);
	      }
	      objectScore.find({},function(err, objectScore){
	      if (err) {
	        return res.send(err);
	      }	
	      console.log(objectRecipe.name);
	      console.log(objectScore.score);
	      res.render('frontend/recipe.ejs',{
	        objRec      : objectRecipe,
	        objectScore	: objectScore,
	        user        : req.user
	      });
	    });
	});
	});
}