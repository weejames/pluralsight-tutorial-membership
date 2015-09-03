var assert = require('assert');

var Log = function(args) {

    var log = {};

    assert.ok(args.type, args.message,  "Type and message are required");

    log.type = args.type;
    log.message = args.message;
    log.createdAt = args.createdAt || new Date();
    log.userId = args.userId || null;

    return log;
};

module.exports = Log;
