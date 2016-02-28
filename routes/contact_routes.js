'use strict';

var Contact = require('../models/Contact.js');
var bodyParser = require('body-parser');

module.exports = function(router) {

  router.get('/contacts', function(req, res) {
    Contact.findAll({
      attributes: ["id", "first_name", "last_name", "dob", "phone", "email", "notes" ]
    })
      .then(function(contacts) {
        res.json(contacts);
      })
  })
};
