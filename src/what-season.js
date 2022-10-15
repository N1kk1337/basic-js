const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (typeof date === "null") return "Unable to determine the time of year!";
  if (typeof date === "undefined")
    return "Unable to determine the time of year!";

  try {
    if (!(date instanceof Date) || isNaN(date))
      throw new Error("Invalid date!");
    if (date.getMonth() == 11 || date.getMonth() < 2) return "winter";
    if (date.getMonth() > 1 && date.getMonth() < 5) return "spring";
    if (date.getMonth() > 4 && date.getMonth() < 8) return "summer";
    if (date.getMonth() > 7 && date.getMonth() < 11) return "autumn";
  } catch (e) {
    throw new Error("Invalid date!");
  }

  //  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// console.log(getSeason("foo"));
// console.log(getSeason({ John: "Smith" }));
// console.log(getSeason(20192701));
// console.log(getSeason([2019, "27", 0 + "1"]));
// console.log(getSeason(new Date()));

// () => getSeason('foo'),
// () => getSeason({ John: 'Smith' }),
// () => getSeason(20192701),
// () => getSeason([2019, '27', 0 + '1']),
// () => getSeason(() => new Date())

// const fakeDate = {
//   toString() {
//     return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: "Date",
// };

// Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

// console.log(typeof fakeDate);
// console.log(typeof new Date());
// console.log(Object.prototype.toString.call(fakeDate) === "[object Date]");

// console.log(getSeason(fakeDate));

module.exports = {
  getSeason,
};
