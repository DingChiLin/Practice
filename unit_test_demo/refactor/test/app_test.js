const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const {app} = require('../app');

chai.use(chaiHttp);

describe('App', async () => {
    it("calculate flunk count", async () => {
        const res = await chai.request(app)
            .post('/calculate')
            .send({
                scores: [90, 60, 45, 30, 15]
            });
        assert.equal(res.body.number, 1);
    })

    it("calculate flunk count 3", async () => {
        const res = await chai.request(app)
            .post('/calculate')
            .send({
                scores: [90, 60, 30, 29, 15]
            });
        assert.equal(res.body.number, 2);
    })

    it("calculate flunk count 2", async () => {
        const res = await chai.request(app)
            .post('/calculate')
            .send({
                scores: [90, 40]
            });
        assert.equal(res.body.number, 1);
    })
})