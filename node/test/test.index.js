/*jslint nomen: true */
var Y = require('yuitest'),
    Assert = Y.Assert,
    util = require('util'),
    mockery = require('mockery'),
    src = '../index',
    testLib;

Y.TestRunner.add(new Y.TestCase({
    name : 'test lib test case',

    setUp: function () {
        mockery.enable();
        mockery.registerAllowable('util', true);
        mockery.registerAllowable(src, true);
        testLib = require(src);
        Assert.isObject(testLib);
    },

    tearDown: function () {
        mockery.deregisterAll();
        mockery.disable();

    },

    "should get lib" : function () {
        testLib.configure(null);
        Assert.isObject(testLib);
    }
}));

