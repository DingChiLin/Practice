let score = 80

function changeScoreAdd5() {
    score = score + 5
    return score;
}

function changeScoreAdd10() {
    score = score + 10
    return score
}

const newScore1 = changeScoreAdd5();
const newScore2 = changeScoreAdd10();

console.log(newScore1); // should be 85
console.log(newScore2); // should be 90
