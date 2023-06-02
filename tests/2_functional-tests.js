const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test('post 1', () => {
        chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
        .send({
            text: 'We watched the footie match for a while.',
            locale: 'british-to-american',
        })
        .end((err, res) => {
            assert.equal(res.status, 200)
            assert.equal(res.text, '{"text":"We watched the footie match for a while.","translation":"We watched the <span class=\\"highlight\\">soccer</span> match for a while."}')
        })
    })
    test('post 2', () => {
        chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
        .send({
            text: 'We watched the footie match for a while.',
            locale: 'british-to-american',
        })
        .end((err, res) => {
            assert.equal(res.status, 200)
            assert.equal(res.text, '{"text":"We watched the footie match for a while.","translation":"We watched the <span class=\\"highlight\\">soccer</span> match for a while."}')
        })
    })
    test('post 3', () => {
        chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
        .send({
            
            locale: 'british-to-american',
        })
        .end((err, res) => {
            assert.equal(res.status, 200)
            assert.equal(res.text, '{"error":"Required field(s) missing"}')
        })
    })
    test('post 4', () => {
        chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
        .send({
            text: 'We watched the footie match for a while.',
            locale: 'british-to-american',
        })
        .end((err, res) => {
            assert.equal(res.status, 200)
            assert.equal(res.text, '{"text":"We watched the footie match for a while.","translation":"We watched the <span class=\\"highlight\\">soccer</span> match for a while."}')
        })
    })
    test('post 5', () => {
        chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
        .send({
            text: 'We watched the footie match for a while.',
            locale: 'british-to-american',
        })
        .end((err, res) => {
            assert.equal(res.status, 200)
            assert.equal(res.text, '{"text":"We watched the footie match for a while.","translation":"We watched the <span class=\\"highlight\\">soccer</span> match for a while."}')
        })
    })
    test('post 6', () => {
        chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
        .send({
            text: 'We watched the soccer match for a while.',
            locale: 'british-to-american',
        })
        .end((err, res) => {
            assert.equal(res.status, 200)
            assert.equal(res.text, '{"text":"We watched the soccer match for a while.","translation":"Everything looks good to me!"}')
        })
    })
});
