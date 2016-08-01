var Router = require('express').Router;
var Entries = require('./Entries');
var router = new Router();

router.use('/api/v1/entries', Entries);

module.exports = router;
