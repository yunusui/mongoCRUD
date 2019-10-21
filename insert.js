let express = require('express');
let mongodb = require('mongodb');
let MDConn = mongodb.MongoClient;

module.exports = express.Router().post('/', (req, res) => {
    MDConn.connect('mongodb://localhost:27017/mongoPagination', (err, db) => {
        db.collection('Mpage').insertOne({
            "id": req.body.id,
            "name": req.body.name,
            'desc': req.body.desc
        }, (err, result) => {
            if (err)
                res.send({ "insert": "fail" })
            else
                res.send({ "insert": 'success' })
        });
    })
})