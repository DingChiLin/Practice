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

        assert.strictEqual(result.body.number, 0)
    })

    it("calculate flunk count 2", async () => {
        const res = await chai.request(app)
            .post('/calculate')
            .send({
                scores: [90, 80, 70, 49, 40]
            });
        assert.strictEqual(res.body.number, 2);
    })

    it("calculate flunk count 0", async () => {
        const res = await chai.request(app)
            .post('/calculate')
            .send({
                scores: [80, 80, 70, 49, 40]
            });
        assert.strictEqual(res.body.number, 0);
    })

    it("calculate flunk count 1", async () => {
        const res = await chai.request(app)
            .post('/calculate')
            .send({
                scores: [90, 40]
            });
        assert.strictEqual(res.body.number, 1);
    })
})