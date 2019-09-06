import assert from "assert";

/**
 * Use `assert.deepStrictEqual` to compare actual and expected
 * @param {any} actual
 * @param {any} expected
 * @returns {Boolean} the result of a deep equals assertion
 */
const codeTester = (actual, expected) => {
  try {
    assert.deepStrictEqual(actual, expected);
    return true;
  } catch {
    return false;
  }
};

export default codeTester;
