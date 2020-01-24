const {adjustScore, countScoreUnderThreshold} = require('./util');
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

    const newScores = adjustScore(scores);
    const flunkCount = countScoreUnderThreshold(newScores, 60);

    res.status(200).json({number: flunkCount});}
)

app.listen(port, () => {console.log(`(refactored) start server listening on port ${port}`)})

module.exports = {app};