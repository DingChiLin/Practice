const express = require('express');
const path = require('path')
const app = express();
const port = 4000;

app.use(express.urlencoded());
app.use(express.json())
app.use(express.static('view'));

app.get('/', (req, res) => {
    res.send("HI");
})

app.get('/score', (req, res) => {
    res.sendFile(path.join(__dirname, 'view/score.html'));
})

app.post('/calculate', (req, res) => {
    const data = req.body;
    const scores = data.scores.map(x => parseInt(x));

    let maxScore = 0;
    for (s of scores) {
        if (s > maxScore) {
            maxScore = s;
        }
    }

    let minScore = 100;
    for (s of scores) {
        if (s < minScore) {
            minScore = s;
        }
    }

    let newScores = [];
    for (s of scores) {
        const ratio = 50 / (maxScore - minScore);
        const newScore = s * ratio + (100 - maxScore * ratio);
        newScores.push(newScore);
    }

    let flunkCount = 0;
    for (score of newScores) {
        if (score < 60){
            flunkCount += 1
        }
    }

    res.status(200).json({number: flunkCount});
})

app.listen(port, () => {console.log(`(original) start server listening on port ${port}`)})

module.exports = {app};