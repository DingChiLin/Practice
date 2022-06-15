const express = require('express');
const app = express();
const port = 4000;

app.use(express.urlencoded());
app.use(express.json())
app.use(express.static('static'));
app.use(express.static('public'));

app.get('/test', (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {console.log(`(original) start server listening on port ${port}`)})