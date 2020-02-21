const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public'));

app.get('/progress', async (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/event-stream'});
    let i = 0;
    var interval = setInterval(() => {
        i += 10
        res.write("event: progress\n");
        res.write("data: "+ i +"\n\n");

        if (i >= 100) {
            clearInterval(interval);
            res.end();
        }
    }, 1000);
})

app.listen(port, () => console.log(`App listening on port ${port}`));