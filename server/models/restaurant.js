var mongoose = require('mongoose');
//schema for news item
var restaurantSchema = new mongoose.Schema({
  id: {type:Number, unique: true},
  name: String,
  url: String,
  location:String,
  cuisines: String,
  featured_image:String


});
var Restaurant = mongoose.model('restaurantdetails', restaurantSchema);
module.exports=Restaurant;
