let express = require('express');
let cors = require('cors');
let bodyparser = require('body-parser');

let multer = require('multer');

let DIR = './uploads';



let app = express();
app.use(cors())

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))

let fetchModule = require('./fetch');
app.use('/fetch', fetchModule)

let InsertModule = require('./insert');
app.use('/insert', InsertModule)

let updateModule = require('./update');
app.use('/update', updateModule)

let DeleteModule = require('./delete');
app.use('/delete', DeleteModule)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



// set storage
let storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, 'DIR')
    }, filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + Path.extname(file.originalname) );
    }
})
let upload = multer({ storage: storage });

app.use(function (req,res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200/' );
    res.setHeader('Access-Control-Allow-Header', 'post');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.get('/', function (req, res) {
    res.end('file catcher example');
  });
// Uploading a Single File

app.post('./insert.js', upload.single('photo'), (req, res) => {
    let file = req.file
    if (!file) {
        let error = new Error('please upload file')
        error.httpStatusCode = 400
     }
    res.send(file)
})

app.listen(8888);
console.log('server running on port 8888')