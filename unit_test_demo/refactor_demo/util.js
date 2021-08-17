function findMaxScore(scores) {
    return Math.max(...scores)
}

function adjustScores(scores, diff) {
    return scores.map(x => x + diff)
}

function findFlunkCount(scores) {
    return scores.filter(x => x < 60).length
}

module.exports = {
    findMaxScore,
    adjustScores,
    findFlunkCount
}