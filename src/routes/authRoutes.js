var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function() {
	authRouter.route('/signUp')
	    .post(function (req, res) {
	    	console.log('inside authRoutes.js function')
	    	console.log(req.body);
	    	req.login(req.body, function() {
	    		res.redirect('/auth/profile');
	    		console.log("we're in authRoutes login function")
	    	});
	    });
	authRouter.route('/profile')
	    .get(function(req, res){
	    	res.json(req.user);
	    	console.log("inside /profile");
	    });
	return authRouter;
};

module.exports = router;