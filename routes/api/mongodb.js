const express = require("express");
const router = express.Router()

const userService = require("../../mongodb/userService");
const db = require('../../mongodb/config.js');

db.connect(() => {
    router.get('/user', (req, res) => {
        userService.getUsers(res);
        // db.get().db('animals').collection('users').find({}).toArray()
        //     .then((users) => {
        //     console.log('Users', users);
        //     res.json(users);
        // });
    })
});

module.exports = router;
