const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let ans = 0;
  let string = n.toString().split("");
  string.forEach((number) => (ans += Number(number)));

  while (ans.toString().split("").length > 1) {
    string = ans.toString().split("");
    ans = 0;

    string.forEach((number) => (ans += Number(number)));
  }

  return ans;
}

console.log(getSumOfDigits(91));

module.exports = {
  getSumOfDigits,
};
