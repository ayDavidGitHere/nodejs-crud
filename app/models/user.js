var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Schema for User
var UserSchema = new Schema({
 name: {
 type: String,
 // required: true
 },
 email: {
 type: String
 },
 password: {
 type: String,
 //required: true
 },
 dob: {
 type: Date,
 //required: true
 },
 gender: {
 type: String, // Male/Female
 // required: true
 }
});
//Define the model for User
var User;
if(mongoose.models.User)
 User = mongoose.model('User');
else
 User = mongoose.model('User', UserSchema);
//Export the User Model
module.exports = User;
