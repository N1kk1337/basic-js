const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }

  calculateDepth(arr) {
    console.log(arr);

    const DP = new DepthCalculator();

    return Array.isArray(arr)
      ? 1 + Math.max(0, ...arr.map(this.calculateDepth))
      : 0;
  }
}
//const DP = new DepthCalculator();

//console.log(DepthCalculator.calculateDepth([1, 2, 3, 4, 5, [1]]));

module.exports = {
  DepthCalculator,
};
