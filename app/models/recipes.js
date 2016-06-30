var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var objectSchema = new Schema({

	name:String,
	description:String,
	author:String,
	department:String,
    ingredients:String,
    steps:String,
    imageurl:String

});

// create the model for users andc expose it to our app
module.exports = mongoose.model('recipe', objectSchema);