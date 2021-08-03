var User = require('../models/user');
var crypto = require('crypto');
//Controller for User
var UserController = {
 //Create a User
 create: function(req, res){
 var repassword = req.body.repassword;
 var password = req.body.password;
 var userEmail = req.body.email;
 //Check if the email address already exists
 User.find({"email": userEmail}, function(err, usr){
 if(usr.length > 0){
     //Email Exists
     res.json('Email already exists');
     return;
 }
 else {
 //New Email
 //Check for same passwords
 if(password != repassword){
    res.json('Passwords does not match');
    return;
 }
 //Generate Password hash based on sha1
 var shasum = crypto.createHash('sha1');    shasum.update(req.body.password);
 var passwordHash = shasum.digest('hex');
 //Create User
 var user = new User();
 user.name = req.body.name;
 user.email = req.body.email;
 user.password = passwordHash;
 user.dob = Date.parse(req.body.dob) || "";
 user.gender = req.body.gender;
 //Validate the User
 user.validate(function(err){
 if(err){   res.json(err);  return; }
 else{
    //Finally save the User
    user.save(function(err){
    if(err){ res.json(err); return;}
    //Remove Password before sending User details
    user.password = undefined;
    res.json(user);
    return;
 }
 );
 }
 });
 }
 });
 }
}
module.exports = UserController;

/*** create Model/User module ***/