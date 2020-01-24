const assert = require('assert');
const {adjustScore, countScoreUnderThreshold} = require('../util');

describe("Util", () => {
    it("adjust score with five scores", () => {
        const scores = [90, 60, 45, 30, 15];
        const newScores = adjustScore(scores);
        const expect = [100, 80, 70, 60, 50];
        assert.deepEqual(newScores, expect);
    })

    it("adjust score with two scores", () => {
        const scores = [90, 40];
        const newScores = adjustScore(scores);
        const expect = [100, 50];
        assert.deepEqual(newScores, expect);
    })

    it("count number below", () => {
        const scores = [100, 80, 70, 59, 50];
        const count = countScoreUnderThreshold(scores, 60);
        const expect = 2
        assert.equal(count, expect);
    })
})