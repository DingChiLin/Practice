const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Hello Node");
})

app.listen(3000, () => {console.log("start server!")})