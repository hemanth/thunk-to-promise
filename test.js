var thunkToPromise = require("./index");
var fs = require('fs');
var assert = require('assert');
var readThunk = require("thunkify")(fs.read);
var isPromise = function isPromise(obj) {
  return obj && typeof obj.then === 'function';
};

describe("thunk-to-promise test suite", function() {
  it("should convert thunk to promise", function() {
    assert(isPromise(thunkToPromise(readThunk)),true);
  });
});