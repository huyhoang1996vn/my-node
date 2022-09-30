const express = require('express')
const router = express.Router()

const db = require('../../mongoose/config.js');
const employees = require("../../mongoose/model");

router.get('/user', (req, res) => {
    employees.find({}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
      });
})

router.post('/user', (req, res) => {
    console.log("LOGGER req ", req.body);
    const newEmployee = new employees({name: req.body.name, age: req.body.age, location: req.body.location})
    newEmployee.save({}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
      });
})

module.exports = router;

