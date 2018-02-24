
require('dotenv').config() 

var validation = require("./key.js");

var request = require("request");

var Twitter = require('twitter');

var client = new Twitter(validation.twitter);

var params = {
	q: 'GR3FOU',
	count: 15
}

client.get('search/tweets', params, gotData);

function gotData(err, data, response) {
	var myTweets = data.statuses;
	for (var i = 0; i < myTweets.length; i++) {
		console.log(myTweets[i].text);
	}
}


