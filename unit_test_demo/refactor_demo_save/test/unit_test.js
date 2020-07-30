const assert = require('assert');

const util = require('../util');

describe("Util", () => {
    it("find max", () => {
        const scores = [45, 90, 60, 30, 15];
        const maxScore = util.findMax(scores);
        const expect = 90
        assert.equal(maxScore, expect);
    })
})