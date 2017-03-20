//Dependencies
var express = require('express');
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Promise = require("bluebird");


//Require the model
var Instructions = require("./api/model/model");

//Initialize Express
var app = express();

//Port
var PORT = 3000;

mongoose.Promise = Promise;


// set up body-parser
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
	extended: false
}));

// Setting the public static directory
app.use(express.static(__dirname + "/app"));

//Connection to database
mongoose.connect("mongodb://localhost/model");

// Save mongoose connection to db
var db = mongoose.connection;

// Logging any moongoose errors to console
db.on("error", function(error) {
	console.log("Mongoose Error: ", error);
});

// Alerting that we have an open connection
db.once("open", function() {
	console.log("Mongoose connection successful.");
});

// Alerting that we have a port connection
app.listen(PORT, function() {
	console.log("listening on port:" + PORT);
});

 module.exports = db;


app.get("/", function(req, res) {

  Instructions.find({}, function(err, doc) {

  	if (err) {
  		res.send(err);
  	}

  	else {
  		console.log(doc);
  	}
  });

});

app.post('/', function(req, res) {

  // create a new todo object
  var newInstructions = new Instructions({
    category: category,
    videoName: videoName,
    videoLink: videoLink,
    transcript: transcript
  });

newInstructions.save(function (err, newInstructions) {
    if (error) console.log('error saving to list', err);
    response.sendStatus(200);
  });

});
