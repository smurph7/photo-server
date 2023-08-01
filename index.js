var express = require('express');
var app = express();

var dir = process.env.DIR;

app.use(express.static(dir));

app.listen(8080, function () {
  console.log('Listening on http://localhost:8080/', dir);
});
