var express = require("express");

var app = express();
var port = (9111);

app.listen(port);

var bodyParser = require("body-parser");

var hobbies = ["snowboarding", "family", "movies"];
var occupations = ["Sales Rep", "Barista", "Financial Rep", "Wev Developer"];
var mentions = ["http://www.wsj.com", "http://www.facebook.com", "http://www.twitter.com/jdtelford"];
var references = ["Heather Telford", "Todd Telford", "Dylan Telford"];
var skills = [
	{
		id: 1,
  		name: 'Snowboarding',
  		experience: 'advanced'
	},
	{
		id: 2,
  		name: 'Watching Movies',
  		experience: 'beginner'
	},
	{
		id: 3,
  		name: 'Driving my car',
  		experience: 'intermediate'
	}
];


var myData = {
	name: "Jeff Telford",
	location: "Utah",
	occupations: "Web Developer in Training"
};


app.use(bodyParser.json());


app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
 	res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 	next();
})

app.get('/api/name', function(req, res){
	res.json({
		"name": myData.name
	});
	res.type(application/json);
})

app.get('/location', function(req, res){
	res.json({
		"location": myData.location
	})
})

app.put('/location', function(req, res){
	myData.location = req.body.location;
	res.json(myData.location)
})

app.get('/hobbies', function(req, res){
	if(req.query.order === 'asc'){
    	res.send({hobbies: hobbies.sort()})
  	} else if (req.query.order === 'desc'){
    	res.send({hobbies: hobbies.sort().reverse()});
  	} else {
    	res.send({hobbies: hobbies});
  	}
})

app.get('/occupations', function(req, res){
	// res.json({
	// 	"occupations": occupations
	// })
	if(req.query.order === "asc"){
		res.send({occupations: occupations.sort()})	
	} else if (req.query.order === "desc"){
		res.send({occupations: occupations.sort().reverse()})
	} else {
		res.send({occupations: occupations});
	}
})

app.get('/occupations/latest', function(req, res){
	res.json({
		"latestoccupation": occupations[occupations.length - 1]})
})

app.get('/mentions', function(req, res){
	res.json({
		"mentions": mentions
	})
})

app.post('/mentions', function(req, res){
	mentions.push(req.body.mentions);
	res.json(mentions);
})

app.get('/references', function(req, res){
	res.json({
		"references": references
	})
})

app.post('/references', function(req, res){
	references.push(req.body.references);
	res.json(references);
})


app.get('/skills', function(req, res){
	console.log(res.body)
	if(req.query.experience === "beginner"){
		res.json({skills: skills})
	}
})

app.post('/skills', function(req, res){
	skills.push(req.body.skills);
	res.json(skills)
})

