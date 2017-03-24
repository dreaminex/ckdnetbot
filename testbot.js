var app = require("express")();
var bodyParser = require("body-parser");
var request = require("request");
var async = require("async");

app.set("port", (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/bot', function(req, res){
res.send('ok');

});

app.post("/callback", function(req, res) {
	res.send('ok');
});

app.listen(app.get("port"), function() {
	console.log("Node app is running");
});
