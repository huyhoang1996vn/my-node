const express = require("express");
const router = express.Router()

const personService = require("../../mysql/personService");
const connection = require('../../mysql/config');

router.get('/user', (req, res) => {
    // connection.query('SELECT * from Persons', (err, rows, fields) => {
    //     if (err) throw err
    //     console.log('The solution is: ', rows);
    //     res.json(rows);
    // })
    // const data = personService.getPersons();
    // console.log("== data ", data);
    // res.json(data);
    personService.getPersons(res);
})

router.post('/user', (req, res) => {
    console.log("LOGGER ", req.body);
    personService.createPerson(res, req.body)
})

module.exports = router;
