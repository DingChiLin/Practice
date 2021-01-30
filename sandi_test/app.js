const express = require('express');
// const mysql = require('mysql');
const multer = require('multer');
const path = require('path');
const app = express();
// const request = require('request');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

// Init Upload 
const upload = multer({
    dest: 'public/uploads/'
})

app.post('/addNewImages', upload.single('main_image'), (req, res) => {
    console.log(req.file);
});

app.get('/', (req, res) => {
    res.send("Hello");
})

app.listen('9000',() => {
    console.log ("Listening on port 9000");
})
