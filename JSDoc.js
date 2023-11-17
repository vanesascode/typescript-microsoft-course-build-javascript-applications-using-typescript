//@ts-check

/**
 * @type {string}
 */
const hello = 345345; // Type 'number' is not assignable to type 'string'.ts(2322)

/**
 * @type {Array<string|number>}
 */
const friends = [[1, 2], "tom"]; // Type '[number, number]' is not assignable to type 'string | number'.ts(2322)

/**
 * @typedef {Object} user
 * @property {number} id  - The id of the user.
 * @property {string} name - The name of the user.
 * @property {Array<string|number>} friends - The friends of the user.
 *
 */

/**
 *  @type {user}
 */
const user = {
  id: "e", // Type 'string' is not assignable to type 'number'.ts(2322)
  name: 'Vanesa',
  friends
}