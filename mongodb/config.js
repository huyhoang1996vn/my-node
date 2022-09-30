const MongoClient = require('mongodb').MongoClient
const mongoDbUrl = 'mongodb://localhost:27017/nodejs';
let mongodb;

// MongoClient.connect('mongodb://localhost:27017/nodejs', (err, client) => {
//   if (err) throw err

//   db = client.db('nodejs')
// })
// function connectToServer(  ) {
//     MongoClient.connect('mongodb://localhost:27017/nodejs', (err, client) => {
//         if (err) throw err
//         db = client.db('nodejs');
//     })
// }

// const getDb = ()=>{
//     return db;
// }

function connect(callback){
    MongoClient.connect(mongoDbUrl, (err, db) => {
        mongodb = db;
        console.log(`Copograte mongodb`);
        callback();
    });
}
function get(){
    return mongodb;
}

function close(){
    mongodb.close();
}

module.exports = {connect, get, close};
