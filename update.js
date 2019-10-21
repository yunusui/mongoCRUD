let express = require('express');
let mongodb = require('mongodb');
let MDConn = mongodb.MongoClient;

module.exports = express.Router().put('/', (req, res) => {
    let ObjId = { 'id': req.body.id }
    let ObjData = {
        $set: {
            'name': req.body.name,
            //'desc': req.body.desc
        }
    }
    MDConn.connect('mongodb://localhost:27017/mongoPagination', (err, db) => {
        db.collection('Mpage').updateOne(ObjId, ObjData, (err, result) => {
            if (err)
                res.send({ 'update': 'fail' })
            else
                res.send({ 'update': 'success' })
        })
    })
})