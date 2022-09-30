const connection = require('./config');


const getPersons = (res)=>{
    connection.query('SELECT * from Persons', (err, rows, fields) => {
        if (err) throw err
        console.log('The solution is: ', rows);
        res.json(rows)
    })
};

const createPerson = (res, data)=>{
    const values = [
        [data.username, data.password, data.age]
    ]
    connection.query(`INSERT INTO Persons(username, password, age) VALUES ?`, [values],(err, rows, fields) => {
        if (err) throw err
        console.log('The solution is: ', err);
        res.json(data)
    })
};


module.exports = {
    getPersons,
    createPerson
}