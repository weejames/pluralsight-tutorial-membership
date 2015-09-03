var should = require('should');
var Log = require('../../src/models/log');

describe('Log', function() {

    describe('defaults', function() {

        var log = {};

        before(function() {
            log = new Log({type: 'ERROR', message: 'Gone wrong'});
        });

        it('has the correct error type', function() {
            log.type.should.equal('ERROR');
        });

        it('has the correct error message', function() {
            log.message.should.equal('Gone wrong');
        });

        it('has the correct user id');
        it('has a created date');

    });

});