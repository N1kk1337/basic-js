const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrayOfDigits = String(n).split("");
  let arrayOfNumbers = [];
  for (let i = 0; i < arrayOfDigits.length; i++) {
    let temp = [...arrayOfDigits];
    temp.splice(i, 1);
    arrayOfNumbers.push(Number(temp.join("")));
  }

  return Math.max(...arrayOfNumbers);
}

//console.log(deleteDigit(152));

module.exports = {
  deleteDigit,
};
