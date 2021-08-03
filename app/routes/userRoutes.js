var express = require('express');
var UserController = require('../controllers/userController');
//Routes for User
var UserRoutes = function(app){
    var router = express.Router();
    router.route('/users').post(UserController.create);
    return router;
}
module.exports = UserRoutes;