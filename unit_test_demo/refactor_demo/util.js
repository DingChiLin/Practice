function findMaxScore(scores) {
    return Math.max(...scores);
}

function addScoresByValue(scores, value) {
    return scores.map(x => x + value);
}

function countFlunkNumber(scores) {
    return scores.filter(x => x < 60).length;
}

module.exports = {
    findMaxScore,
    addScoresByValue,
    countFlunkNumber
}