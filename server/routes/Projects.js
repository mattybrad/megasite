var Router = require('express').Router;
var router = new Router();
var Project = require('../models/Project');

router.get('/', function(req, res){
  Project.find({}).exec(function(err, result) {
    res.send(result);
  });
})

router.post('/', function(req, res){
  Project.create({
    title: "Testing"
  }, function(err, result) {
    if(err) return res.status(400).send(err);
    res.send(result);
  });
})

module.exports = router;
