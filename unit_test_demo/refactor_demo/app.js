const express = require('express');
const path = require('path')
const app = express();
const port = 4000;
const util = require('./util');

app.use(express.urlencoded());
app.use(express.json())
app.use(express.static('view'));

app.get('/score', (req, res) => {
    res.sendFile(path.join(__dirname, 'view/score.html'));
})

app.post('/calculate', (req, res) => {
    /**
     * Get scores from front-end input 
     */
    const data = req.body;
    // e.g.: [90, 80, 70 ,50, 40]
    const scores = data.scores.map(x => parseInt(x)); 

    /**
     * Adjust score
     */
    let maxScore = util.findMaxScore(scores)
    const diff = 100 - maxScore;
    let newScores = util.adjustScores(scores, diff)
    let flunkCount = util.findFlunkCount(newScores);

    /**
     *  Send result back to front-end
     */
    res.status(200).json({number: flunkCount});
})

app.listen(port, () => {console.log(`(original) start server listening on port ${port}`)})

module.exports = {app};