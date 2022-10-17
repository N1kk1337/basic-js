const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("");
  let ans = "";
  for (let i = 0; i < arr.length; i++) {
    let counter = 1;
    while (arr?.[i + counter] === arr[i]) {
      counter++;
    }
    if (counter > 1) {
      ans += +counter + arr[i];
      i += counter - 1;
    } else {
      ans += arr[i];
    }
  }

  return ans;
}

module.exports = {
  encodeLine,
};
