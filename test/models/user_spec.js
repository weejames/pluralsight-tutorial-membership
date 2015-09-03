var should = require('should');
var User = require('../../src/models/user');

describe('User', function() {

    describe('defaults', function() {
        var user = {};

        before(function() {
            user = new User({email: 'test@test.com'});
        });

        it('has correct email', function() {
            user.email.should.equal('test@test.com');
        });

        it('has an authentication token', function() {
            user.authenticationToken.should.be.defined;
        });

        it('has a pending status', function() {
            user.status.should.equal('pending');
        });

        it('has a created date', function() {
            user.createdAt.should.be.defined;
        });

        it('has a sign in count of 0', function() {
            user.signInCount.should.equal(0);
        });

        it('has a last login date', function() {
            user.lastLoginAt.should.be.defined;
        });

        it('has a current login date', function() {
            user.currentLoginAt.should.be.defined;
        });

    });

});
