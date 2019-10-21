let express = require('express');
let mongodb = require('mongodb');
let MDConn = mongodb.MongoClient;

module.exports = express.Router().delete('/', (req, res) => {
    let ObjId = { 'id': req.body.id }
    MDConn.connect('mongodb://localhost:27017/mongoPagination', (err, db) => {
        db.collection('Mpage').deleteOne(ObjId, (err, result) => {
            if (err)
                res.send({ 'delete': 'fail' })
            else
                res.send({ 'delete': 'success' })
        })
    })
})