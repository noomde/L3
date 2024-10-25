/**
 * Checks the length of the argument array.
 *
 * @param {number[]} array - An array of numbers.
 */
export function validateLength(array) {
  if (array.length === 1) {
    throw new Error('The length of the array can not be 1 or shorter.')
  }
}