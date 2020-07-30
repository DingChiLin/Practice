const express = require('express');
const path = require('path')
const app = express();
const port = 4000;

app.use(express.urlencoded());
app.use(express.json())
app.use(express.static('view'));

app.get('/score', (req, res) => {
    res.sendFile(path.join(__dirname, 'view/score.html'));
})

app.post('/calculate', (req, res) => {
    // Get scores from front-end input
    const data = req.body;
    // Score format example: [90, 80, 70 ,50, 40]
    const scores = data.scores.map(x => parseInt(x)); 

    // Adjust score
    let maxScore = 0;
    for (s of scores) {
        if (s > maxScore) {
            maxScore = s;
        }
    }

    let newScores = [];
    const diff = 100 - maxScore;
    for (s of scores) {
        const newScore = s + diff;
        newScores.push(newScore);
    }

    let flunkCount = 0;
    for (score of newScores) {
        if (score < 60) {
            flunkCount += 1
        }
    }

    // Send result back to front-end
    res.status(200).json({number: flunkCount});
})

app.listen(port, () => {console.log(`(original) start server listening on port ${port}`)})

module.exports = {app};