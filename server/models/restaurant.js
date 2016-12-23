var mongoose = require('mongoose');
//schema for news item
var restaurantSchema = new mongoose.Schema({
  id: {type:Number, unique: true},
  name: String,
  url: String,
  location:Array,
  cuisines: String,
  thumb:String,
  menu_url:String,
  user_rating:Array,
  review:String
});
var Restaurant = mongoose.model('restaurantdetails', restaurantSchema);
module.exports=Restaurant;
