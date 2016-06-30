var objectRecipe = require('../models/recipes');
var fs = require('fs.extra');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

module.exports = function(app, passport) {

  app.get('/recetas', function(req, res) {

    objectRecipe.find({},function(err, objectRecipe) {
      if (err) {
        return res.send(err);
      }
      res.render('recipes.ejs',{
        objectRecipe      : objectRecipe,
        user              : req.user
      });
    });
  });

  app.post("/crearReceta", upload.array('uploadContent',3), function(req,res){
    var datetime = new Date().toJSON().slice(0,10); // Captura AAAA-MM-DD actual
    var recipes = new objectRecipe();

    recipes.code         = req.body.code
    recipes.name         = req.body.name
    recipes.description	 = req.body.description	
    recipes.author		 = req.body.author
    recipes.department	 = req.body.department
    recipes.ingredients  = req.body.ingredients
    recipes.steps  		 = req.body.steps
    recipes.imageurl     = req.body.imageurl
    recipes.save();

       res.redirect('/');

   });

  app.get('/obtener-receta/:id', function(req, res) {

    var id = req.param("id");

    objectRecipe.findById(id, function(err, objRecipe) {
      if (err) throw err;

      objRecipe.save(function(err) {
        if (err) {
            res.send('error');
        }
        else {
            res.send(objRecipe);
        }
      });
    });
  });

  app.post('/modificarReceta/:id', function(req, res) {

    var id = req.param("id");
    
    objectRecipe.findById(id, function(err, objRecipe) {
      if (err) throw err;

      

    	objRecipe.code         = req.body.code
    	objRecipe.name         = req.body.name
    	objRecipe.description  = req.body.description	
    	objRecipe.author	   = req.body.author
    	objRecipe.department   = req.body.department
    	objRecipe.ingredients  = req.body.ingredients
    	objRecipe.steps  	   = req.body.steps
    	objRecipe.imageurl     = req.body.imageurl

      objRecipe.save(function(err) {
        if (err) {
          res.end('error');
          res.redirect('/receta');
        }
        else {
          res.redirect('/receta');
        }
      });
    });
  });

  app.get('/destruirReceta/:id', function(req, res) {
    
    var id = req.param("id");

    objectRecipe.remove({ _id: id }, function(err){
        if (err) {
            res.end('error');
        }
        else {
            res.end('success');
        }
    });
  });

 };