let express = require('express');
let mongodb = require('mongodb');
let DBConn = mongodb.MongoClient;

module.exports = express.Router().get('/', (req, res) => {
   DBConn.connect('mongodb://localhost:27017/mongoPagination', (err, db) => {
   //  DBConn.connect('mongodb://ulobrc1fbxxm9roy9aes:JunLRzKi92NsFMGnmXlv@bl5djcfeng5hjd6-mongodb.services.clever-cloud.com:27017/bl5djcfeng5hjd6', (err, db) => {       
        db.collection('Mpage').find().toArray((err, array) => {
            res.send(array);
        })
    })
})