/**
 * Determine if number is prime.
 *
 * @param {Number} val
 * @return {Boolean} is prime
 * @api public
 */
module.exports = function(val) {
  if (val === 1) return false;
  else if (val === 2) return true;
  else if (val !== undefined) {
    var start = 1;
    var valSqrt = Math.ceil(Math.sqrt(val));
    while (++start <= valSqrt) {
      if (val % start === 0) {
        return false;
      }
    }
    return true;
  }
};