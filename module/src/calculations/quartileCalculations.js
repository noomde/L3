/**
 * checks and returns the upper quartile.
 *
 * @param {number[]} sortedArray - An array of numbers.
 * @returns {number[]} - A array of the upper quartile.
 */
export function getUpperQuartile(sortedArray) {
  if (sortedArray.length % 2 === 0) {
    return sortedArray.slice(Math.floor(sortedArray.length / 2))
  } else {
    return sortedArray.slice(Math.floor(sortedArray.length / 2) + 1)
  }
}