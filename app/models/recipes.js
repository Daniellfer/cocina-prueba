var mongoosePaginate=require('mongoose-paginate');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var recipeSchema = new Schema({
    
    code: String,
    name:String,
	description:String,
	author:String,
	department:String,
    ingredients:String,
    steps:String,
    imageurl:String			

});

recipeSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Recipe', recipeSchema);
