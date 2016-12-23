var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Restaurant=require("../models/restaurant.js");


//http://localhost:8091/restaurantdetails/updateRestaurant
router.put('/updateRestaurant',isLoggedIn,function(req, res){
  if(req.body)
  {
    request1=req.body.id;
    request2=req.body.review;
    Restaurant.update({id:request1},{$set:{review:request2}},function(err){

      if(err) {
        res.send("Error during update");
      }
      else  {
        res.send("succesfully updated");

      }
    });
  }
});



//http://localhost:8091/restaurantdetails/deleteRestaurant
router.delete('/deleteRestaurant',isLoggedIn,function(req, res, next) {

  console.log("deleteRestaurant");
  Restaurant.remove({"id": req.body.id}, function(err) {
    if (!err) {
      //message.type = 'notification!';
      console.log("Deleted Successfully");
    }
    else {
      //message.type = 'error';
      console.log("Error");
    }
  });
  res.send(req.body);
});


//http://localhost:8091/restaurantdetails/viewRestaurant
router.get('/viewRestaurant',function(req, res, next) {
  var restaurant;
  console.log("viewRestaurant");
  Restaurant.find(function(err, restaurantDetail) {

    if (err){
      console.log("---------------There was an error while fetching data-----------------------");
      return console.error(err);

    }
    restaurant=restaurantDetail;
    console.log(restaurant);
    res.json(restaurant);
  });

});


//http://localhost:8091/restaurantdetails/saveRestaurant
router.post('/saveRestaurant',isLoggedIn,function(req, res, next) {

  console.log("saveRestaurant");
  console.log(req.body);
  var restaurantdetail=new Restaurant();
  restaurantdetail.id=req.body.id;
  restaurantdetail.name=req.body.name;
  restaurantdetail.url=req.body.url;
  restaurantdetail.location=[{"address":req.body.location.address,"locality":req.body.location.locality,"city":req.body.location.city,"zipcode":req.body.location.zipcode,"country_id":req.body.location.country_id}];
  restaurantdetail.cuisines=req.body.cuisines;
  restaurantdetail.thumb=req.body.thumb;
  restaurantdetail.menu_url=req.body.menu_url;
  restaurantdetail.user_rating=[{"aggregate_rating":req.body.user_rating.aggregate_rating}];


  //save
  restaurantdetail.save(function (err, savedRestaurant) {
    if (err) {

      console.error(err);
      return res.send("Error during save");
    }
    else{
      //console.log(savedNews);
      console.log(restaurantdetail.name);

      return res.send("Saved Successfully");
    }

  });


});

function isLoggedIn (req, res, next) {
if(req.isAuthenticated()){
return next()
;}
else {
 res.json('not authenticated please log in ');
}
};

module.exports = router;
