const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const {app} = require('../app');

describe('App', async () => {
    it("calculate 1", async () => {
        const result = await chai.request(app)
            .post('/calculate')
            .send({scores: [90, 80, 70, 60, 50]});

        assert.equal(result.body.number, 0)
    })
})