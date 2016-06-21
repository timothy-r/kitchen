/**
 * Created by timrodger on 21/06/2016.
 */

var request = require('supertest'),
    nock = require('nock');

var api_root = process.env.KITCHEN_TEST;
var api_key = process.env.API_KEY;

describe('kitchens API', function() {

    before(function (done) {
        done();
    });

    after(function (done) {
        done();
    });

    describe('GET /kitchens', function () {
        it('list requires authentication', function (done) {
            request(api_root)
                .get('/kitchens')
                .set('X-Api-Key', 'invalid')
                .expect(403, done);
        });

        it('list authentication success', function (done) {
            request(api_root)
                .get('/kitchens')
                .set('X-Api-Key', api_key)
                .expect(200, done);
        });

        it('list gets json', function (done) {
            request(api_root)
                .get('/kitchens')
                .set('X-Api-Key', api_key)
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('POST /kitchens', function () {
        it('add requires authentication', function (done) {
            request(api_root)
                .post('/kitchens')
                .set('X-Api-Key', 'invalid')
                .expect(403, done);
        });

        it('add authentication success', function (done) {
            request(api_root)
                .post('/kitchens')
                .send({name : 'test-kitchen-authn', style:'fifties'})
                .set('X-Api-Key', api_key)
                .expect(200, done);
        });

        it('adds a kitchen', function (done) {
            request(api_root)
                .post('/kitchens')
                .send({name : 'test-kitchen', style:'avant-garde'})
                .set('X-Api-Key', api_key)
                .expect(200, done);
        });
    });
});