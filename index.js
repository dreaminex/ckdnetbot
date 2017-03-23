var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World! Ball')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

