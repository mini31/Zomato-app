var express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var router = express.Router();
var User=require("../models/user.js");
/* GET users listing. */


//schema for authentication


router.post('/register', function(req, res, next) {
console.log("inside register route");

  var firstName=req.body.firstName;
  var lastName=req.body.lastName;
  var username=req.body.username;
  var password=req.body.password;


  var newUser=new User();
  newUser.firstname=firstName;
  newUser.lastname=lastName;
  newUser.username=username;
  newUser.password=password;

  //save
  newUser.save(function (err, savedUser) {
  if (err) {
  console.log(savedUser);
  console.log(newUser.firstname+" "+newUser.lastname+" "+newUser.username+" "+newUser.password);

  return res.send("Error during register");

  }
  else{

  console.error(err);
    return res.send("registered Successfully");
}

  });



  //display
  User.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
});

});


module.exports = router;
