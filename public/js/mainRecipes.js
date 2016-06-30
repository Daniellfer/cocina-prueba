$(document).ready(function(){

	// Al dar click en el boton Agregar...
	$("#add-recipe").click(function(){
		
		$(".table-recipes").hide(100);
		$(".form-recipe").show(100);
		$("#form-add-recipe").show(100);
		$("#form-modify-recipe").hide(100);

	});

	// Al dar click en el boton Listar...
	$(".list-recipes").click(function(){
		
		$(".form-recipe").hide(100);
		$("#form-add-recipe").hide(100);
		$("#form-modify-recipe").hide(100);
		$(".table-recipes").show(100);

	});

	// Al dar click en el boton Editar...
	$('.show-modify-form').click(function(){

		$(".form-recipe").show(100);
		$("#form-add-recipe").hide(100);
		$("#form-modify-recipe").show(100);

		var dataId = this.id;

		$.ajax({ 
	   		type: 'GET', 
	   		url: '/obtener-receta/'+$(this).attr("id"),
	   		dataType: 'json',
	   		success: function (data) {
	   			receta = data;
	   			
	   			$("#button_update").attr("id", dataId);

	   			$("#mod_code").val(receta.code);
	   			$("#mod_name").val(receta.name);
	   			$("#mod_description").val(receta.description);
	   			$("#mod_author").val(receta.author);
	   			$("#mod_department").val(receta.department);
	   			$("#mod_ingredients").val(receta.ingredients);
	   			$("#mod_steps").val(receta.steps);
	   			//$("#mod_ingredients").val(receta.ingredients);
	   			
	   		},
	   		error:function(msg) {
	   			// body...
	   			console.log(msg+"Peticion de datos fallida");
	   		}
	   	});
	});

	// Al dar click en el boton Actualizar...
	$('.modify-recipe').click(function(){

		var dataId = this.id;
		$('#frm-modify-recipe').attr("action", "modificarReceta/"+dataId);		

		$('#frm-modify-recipe').submit();
	});


	// Al dar click en el boton Cancelar...
	$("#cancel-modify").click(function(){
		
		$(".form-recipe").hide(100);
		$("#form-add-recipe").hide(100);
		$("#form-modify-recipe").hide(100);
		$(".table-recipes").show(100);

	});


	// Al dar click en el boton Eliminar...
	$('.delete-recipe').click(function(){

		var dataId = this.id;
		var clase = "."+dataId; //Cada fila de la tabla posee una clase propia que cotiene el Id de cada objeto de la lista
		$.ajax({
    		type    : 'get',
    		url     : '/destruirReceta/' + dataId, //Funcion de borrado
    		success : function(response) {
		    	if (response === 'error') {
	           		alert('Error al eliminar la receta');
	       		} else if (response === 'success') {
	          		 $(this).parent("tr").remove(); 
	          		 alert("Receta borrada satisfactoriamente");  	
	          	}
    		}
		});
	});
});