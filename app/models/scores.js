var mongoosePaginate=require('mongoose-paginate');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var scoreSchema = new Schema({
    
    score: String,
    recipeid:String

});

scoreSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Score', scoreSchema);