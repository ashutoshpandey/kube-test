var express = require('express');
var app = express();

app.get('/test', function (req, res) {
    let data = getData();
    res.send(data);
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
});

function getData() {
    return [{
        id: 1,
        name: 'First',
        gender: 'Male'
    }, {
        id: 2,
        name: 'Second',
        gender: 'Female'
    }, {
        id: 3,
        name: 'Third',
        gender: 'Female'
    }, {
        id: 4,
        name: 'Fourth',
        gender: 'Male'
    }];
}