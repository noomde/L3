export class VarianceCalculations {
  /**
   * Subtracts the arguments mean from each number.
   *
   * @param {number[]} numArray - An array of numbers.
   * @param {number} mean - The mean of numArray.
   * @returns {number[]} - The subtracted and squared mean.
   */
  static squareAndSubtractDifference(numArray, mean) {
    let numArrayCopy = [...numArray]
    for (let i = 0; i < numArrayCopy.length; i++) {
      numArrayCopy[i] -= mean
      numArrayCopy[i] **= 2
    }
    return numArrayCopy
  }

  /**
   * Calculates the sample variance.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} - the sample variance.
   */
  static calculateSampleVariance(numArray) {
    let divident = 0
    for (let number of numArray) {
      divident += number
    }
    return divident / (numArray.length - 1)
  }
}