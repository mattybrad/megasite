var path = require('path');
var fs = require('fs');
var https = require('https');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/mysite');

var app = express();
app.use(bodyParser.json());
var compiler = webpack(config);

var routes = require('./server/routes')

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/css', express.static('app/css'));
app.use('/mp3', express.static('app/mp3'));

app.use('/', routes);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.listen(4000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('listening');
});
