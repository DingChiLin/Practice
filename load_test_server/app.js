// Express Initialization
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;

app.set('trust proxy', 'loopback');
app.set('json spaces', 2);

app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

server = require('http').createServer(app);
server.maxConnections = 20;
server.setTimeout(500);
function getConnections() {
    server.getConnections((error, count) => console.log(count));
}

app.post('/api', function(req, res) {
    getConnections();
    console.log(req.body);
    // res.send(req.body);
});

// app.listen(port, () => {console.log(`Listening on port: ${port}`);});

server.listen(3000);
module.exports = app;
