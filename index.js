
//Import Libraries
var express = require('express');
//var session = require('express-session');
var mongoose = require('mongoose');
var request = require('request');
//Import custom modules
var userRoutes = require('./app/routes/userRoutes');
var config = require('./app/configs/config');

//Create a new Express application and Configure it
var app = express();

//data
var connectRes = "Success :)";

//Connect to Mongo DB
mongoose.connect(config.getDBString());
var db = mongoose.connection;
db.on('error', function(){    
    connectRes = "Failed :("; console.error("\n A db error occured.\n");
});

//Configure Routes
//app.use(config.API_PATH, userRoutes());
app.get("/", function(req, res){
    res.send("Signup HomePage! <p>Database Connect Result: "+connectRes+"<p>")
})
//Start the server
app.listen(config.PORT, function(){
    console.log('Server started at - '+ config.URL+ ":" +config.PORT)
});
