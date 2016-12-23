var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Restaurant=require("../models/restaurant.js");


//http://localhost:8091/restaurantdetails/updateRestaurant
router.put('/updateRestaurant',function(req, res){
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
router.delete('/deleteRestaurant',function(req, res, next) {

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
router.post('/saveRestaurant',function(req, res, next) {

  console.log("saveRestaurant123");
  console.log(req.body);
  console.log(req.body.restaurant_address);
  var restaurantdetail=new Restaurant();
  restaurantdetail.id=req.body.restaurant_id;
  restaurantdetail.name=req.body.restaurant_name;
  restaurantdetail.url=req.body.url;
  restaurantdetail.location=req.body.restaurant_address;
  restaurantdetail.cuisines=req.body.cuisine_name;
  restaurantdetail.featured_image=req.body.featured_image;



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


module.exports = router;
