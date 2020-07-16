const assert = require("chai").assert;
const codelabone = require("../codelabone");

describe("Testing the computeGeometries function", function () {
  it("check that our the function returns expected values", function () {
    let expected = [
      [12.571428571428571, 12.571428571428571],
      [12, 14],
      [20, 18],
      [0, 594],
    ];
    assert.deepEqual(codelabone(2, [3, 4], [4, 5], [3, 7]), expected);
  });
});
