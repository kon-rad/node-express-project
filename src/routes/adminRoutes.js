var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
        {
              title: 'Twenty Thousand Leagues Under the Sea',
              genre: 'Adventure',
              author: 'Jules Verne',
              read: false
          },
        {
              title: 'Will the Circle be Unbroken?',
              genre: 'Philosophy',
              author: 'Studs Turkle',
              read: false
          },
        {
              title: 'Steve Jobs',
              genre: 'Biography',
              author: 'Walter Isaacson',
              read: false
          }
  ];

var router = function(nav) {

    adminRouter.route('/addBooks')
        .get(function(req, res) {
        	var url = 'mongodb://localhost:27017/libraryApp';

        	mongodb.connect(url, function(err, db){
        		var collection = db.collection('books');
        		collection.insertMany(books, 
        			function(err, results){
        				res.send(results);
        				db.close();
        		});
        	});
        	// res.send('inserting books');

        });

    return adminRouter;
};

module.exports = router;