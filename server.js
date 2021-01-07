const port = process.env.PORT || 3000
// Load Node modules
var express = require('express');
// Initialise Express
var app = express();
// Render static files
app.use(express.static(__dirname + '/../public'));
// Port website will run on
app.listen(port);