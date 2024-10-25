/**
 * A utility class for mode calculations.
 */
export class ModeCalculations {
  /**
   * Updates the count of how many times a number appears in the array.
   *
   * @param {object} modeMap - An object where the keys are numbers from the array, and the values are their respective counts.
   * @param {number} number - The number currently being counted.
   */
  static updateModeCount(modeMap, number) {
    if (modeMap[number] === undefined) {
      modeMap[number] = 1
    } else {
      modeMap[number]++
    }
  }

  /**
   * Updates the mode and maximum count if the current number has appeared more times than the previous mode.
   *
   * @param {object} modeMap - An object where the keys are numbers from the array, and the values are their respective counts.
   * @param {number} number - The current number being evaluated.
   * @param {number} maximumCount - The current highest count of any number in the array.
   * @returns {number|undefined} - Returns the current mode if the number has the highest count; otherwise returns `null`.
   */
  static updateMaxMode(modeMap, number, maximumCount) {
    if (modeMap[number] > maximumCount) {
      maximumCount = modeMap[number]
      return [number, maximumCount]
    }
  }
}