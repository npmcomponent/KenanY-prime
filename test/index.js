var prime = require('../');
var should = require('should');

describe('prime(val)', function() {
  it('should return true for prime numbers', function(done) {
    prime(2).should.equal(true);
    prime(17).should.equal(true);
    prime(839).should.equal(true);
    prime(3733).should.equal(true);
    prime(999983).should.equal(true);
    done();
  });
  it('should return false for composite numbers', function(done) {
    prime(1).should.equal(false);
    prime(4).should.equal(false);
    prime(18).should.equal(false);
    prime(25).should.equal(false);
    prime(838).should.equal(false);
    done();
  });
});