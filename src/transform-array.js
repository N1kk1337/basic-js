const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let ans = [];

  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      if (typeof arr[i + 1] === "number") {
        i++;
      }

      continue;
    }
    if (arr[i] === "--discard-prev") {
      if (
        typeof arr[i - 1] === "number" &&
        typeof ans[ans.length - 1] === "number" &&
        !(arr[i - 2] === "--discard-next")
      ) {
        ans.pop();
      }
      continue;
    }
    if (arr[i] === "--double-next") {
      if (typeof arr[i + 1] !== "undefined") {
        ans.push(arr[i + 1]);
      }

      continue;
    }
    if (arr[i] === "--double-prev") {
      if (i != 0 && !(arr[i - 2] === "--discard-next")) {
        ans.push(arr[i - 1]);
      }
      continue;
    }

    ans.push(arr[i]);
  }
  return ans;

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform,
};
