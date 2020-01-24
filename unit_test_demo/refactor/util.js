const adjustScore = (scores) => {
    let newScores = [];

    let maxScore = 0;
    for (s of scores) {
        if (s > maxScore) {
            maxScore = s
        }
    }

    let minScore = 100;
    for (s of scores) {
        if (s < minScore) {
            minScore = s
        }
    }

    for (s of scores) {
        ratio = 50 / (maxScore - minScore)
        s = s * ratio + (100 - maxScore * ratio)
        newScores.push(s)
    }

    return newScores;
}

const countScoreUnderThreshold = (scores, threshold) => {
    let count = 0;
    for (score of scores) {
        if (score < threshold){
            count += 1
        }
    }
    return count;
}

module.exports = {
    adjustScore,
    countScoreUnderThreshold
}