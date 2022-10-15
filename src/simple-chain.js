const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let str;
    if (typeof value === "undefined") str = "( )";
    else str = "( " + String(value) + " )";
    this.chain.push(str);
    // console.log("added " + typeof String(value) + " " + String(value));
    // console.log(this.chain);
    return this;
  },
  removeLink(position) {
    if (
      isNaN(position) ||
      position % 1 != 0 ||
      this.chain.length == 0 ||
      position > this.chain.length ||
      position < 1
    ) {
      this.chain=[];
      throw new Error("You can\'t remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
    }
    // console.log("removed");
    // console.log(this.chain);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    // console.log("reverse");
    // console.log(this.chain);

    return this;
  },

  finishChain() {
    console.log(this.chain);
    let ans = this.chain.join("~~");
    this.chain=[];
    return ans;
  },
};

// console.log(
//   chainMaker
//     .addLink(function () {})
//     .addLink("2nd")
//     .addLink("3rd")
//     //.removeLink(2)
//     .removeLink("asd")
//     .finishChain()
// );

module.exports = {
  chainMaker,
};
