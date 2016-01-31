var app = connect();
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var server = app.listen(port);
var server = http.createServer(app);

app.use(express.logger());
app.use('/', express.static(__dirname));
app.listen(port, function() {
  console.log('Server started on ' + port);
});

app.use(function middleware1(req, res, next) {
  // middleware 1
  next();
});
