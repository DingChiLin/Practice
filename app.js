
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'))

app.get('/:category', (req, res) => {
    const category = req.params.category;
    const paging = req.query.paging;

    console.log("Ya");

    res.send("Hello");
})

app.listen('3000',() => {
    console.log ("Listening on port 9000");
})