module.exports = function(app){

//mediante get se esta dando respuesta a la solicitud del usuario
	app.get('/formularioReceta', function(request, response) {
	response.render('backend/recipeform');
	});

}