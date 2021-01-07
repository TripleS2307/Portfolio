const port = process.env.PORT || 3000
const path = require('path');
// Load Node modules
var express = require('express');
// Initialise Express
var distDir = __dirname + "/dist/"
var app = express();
// Render static files
if(process.env.NODE_ENV === "production")
{
    app.use(express.static(__dirname + "/../public"));
}
app.get('*', (request, response) => {
	response.sendFile(__dirname +  'index.html');
});
// app.use(express.static(__dirname + '/../public'));
app.use(express.static(distDir));
// Port website will run on
app.listen(port);