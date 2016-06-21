/**
 * Created by timrodger on 21/06/2016.
 */

var request = require('supertest'),
    nock = require('nock');

// get this from env?
var api_root = 'https://uqfkn5fqte.execute-api.eu-west-1.amazonaws.com/tdev/kitchens';
var api_key = '';

describe('kitchens API', function() {

    before(function (done) {
        done();
    });

    after(function (done) {
        done();
    });

    describe('GET /', function () {
        it('list requires authentication', function (done) {
            request(api_root)
                .get('/')
                .set('X-Api-Key', 'invalid')
                .expect(403, done);
        });
    });

    describe('POST /', function () {
        it('Add requires authentication', function (done) {
            request(api_root)
                .get('/')
                .set('X-Api-Key', 'invalid')
                .expect(403, done);
        });
    });
});