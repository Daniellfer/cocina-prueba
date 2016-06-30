module.exports = function(app){

//mediante get se esta dando respuesta a la solicitud del usuario
	app.get('/', function(request, response) {
	response.render('frontend/index');
	});

}