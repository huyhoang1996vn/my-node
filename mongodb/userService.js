const db = require('./config.js');

const getUsers = (res) => {
    db.get().db('nodejs').collection('users').find({}).toArray()
        .then((users) => {
            console.log('Users', users);
            res.json(users);
        });
};

module.exports = {
    getUsers
}