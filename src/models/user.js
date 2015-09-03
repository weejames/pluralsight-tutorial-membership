var assert = require('assert');

var User = function(args) {

    var user = {};

    assert.ok(args.email, "Email address is required");

    user.email = args.email;
    user.authenticationToken = Date.now();
    user.createdAt = args.createdAt || new Date();
    user.status = args.status || 'pending';
    user.signInCount = args.signInCount || 0;
    user.lastLoginAt = args.lastLoginAt || new Date();
    user.currentLoginAt = args.currentLoginAt || new Date();

    return user;
};

module.exports = User;
