var express = require('express');
var app = express();
var fs = require("fs");

app.get('/test', function (req, res) {
    res.send( {'name': 'Ashutosh Pandey'} );
});

var server = app.listen(8080, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port)
});