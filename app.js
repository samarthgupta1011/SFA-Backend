var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var sfaRouter = require('./routes/sfaRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(3000, function(err,resp){
	if(err) throw err;
	console.log("Listening on port 3000");
});

app.use('/',sfaRouter);