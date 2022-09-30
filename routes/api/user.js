const express = require('express')
const router = express.Router()

let users = require('../../user')

router.get('/', (req, res) => {
    res.json(users);
})

router.get('/:name', (req, res) => {
    console.log("req ", req.params.name);
    const found = users.some((x) => { console.log("+== x", x.name, x.name == req.params.name); return x.name == req.params.name });
    if (found) {
        res.json(users.filter((x) => { return x.name === req.params.name }));
    }
    res.json('not found');
})


router.post('/', (req, res) => {
    console.log("=== body ", req.body);
    const newUser = {
        name: req.body.name,
        age: req.body.age
    }

    if (!newUser.name || !newUser.age) {
        res.json("Invalid")
    }
    users.push(newUser);
    res.json(newUser);
})

router.put('/:name', (req, res) => {
    const found = users.findIndex(user => user.name === req.params.name)
    if (found !== -1) {
        users = users.map((user) => {
            return user.name === req.params.name ? { ...user, ...req.body } : user;
        })
        res.json(req.body)
    }
    res.json("Not found")

})

router.delete('/:name', (req, res) => {
    const found = users.findIndex(user => user.name === req.params.name)
    if (found !== -1) {
        users = users.filter((user) => {
            return user.name !== req.params.name
        })
        res.json("success")
    }
    res.json("Not found")

})

module.exports = router;
