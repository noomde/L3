import { ValidateInput } from './validation/validateInput.js'
import { ModeCalculations } from './calculations/modeCalculations.js'
import { VarianceCalculations } from './calculations/varianceCalculations.js'
import { getUpperQuartile } from './calculations/quartileCalculations.js'
import { validateLength } from './validation/checkLength.js'
/**
 * Statistical math class.
 */
export class Statistics {
  /**
   * Sums up numbers from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} - The sum of all numbers from the argument.
   */
  sum(numArray) {
    ValidateInput.checkInput(numArray)
    let result = 0
    for (let i = 0; i < numArray.length; i++) {
      result += numArray[i]
    }
    return result
  }

  /**
   * sorts a copiec argument from biggest to smallest.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number[]} - The sorted array from biggest to smallest.
   */
  sortByDescending(numArray) {
    ValidateInput.checkInput(numArray)
    return [...numArray].sort((x, y) => y - x)
  }

  /**
   * sorts a copied argument from smallest to biggest.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number[]} - The sorted array from smallest to biggest.
   */
  sortByAscending(numArray) {
    ValidateInput.checkInput(numArray)
    return [...numArray].sort((x, y) => x - y)
  }

  /**
   * Calculates the mean from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} - The mean of all numbers from the argument.
   */
  mean(numArray) {
    ValidateInput.checkInput(numArray)
    let divident = 0
    for (let number of numArray) {
      divident += number
    }
    return divident / numArray.length
  }

  /**
   * Calculates the geometric mean from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} - The geometric mean of all numbers from the argument.
   */
  geometricMean(numArray) {
    ValidateInput.checkInput(numArray)
    let multipliedNumbers = 1
    for (let number of numArray) {
      multipliedNumbers *= number
    }
    return Math.pow(multipliedNumbers, 1 / numArray.length)
  }

  /**
   * Calculates the harmonic mean from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} - The harmonic mean of all numbers from the argument.
   */
  harmonicMean(numArray) {
    ValidateInput.checkInput(numArray)
    if (numArray.includes(0)) {
      throw new Error('Harmonic mean can not include and zeros.')
    }
    let reciprocal = 0
    for (let number of numArray) {
      reciprocal += (1 / number)
    }
    return numArray.length / reciprocal
  }

  /**
   * Calculates the median from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} - The median of all numbers from the argument.
   */
  median(numArray) {
    ValidateInput.checkInput(numArray)
    const sortedArray = this.sortByAscending(numArray)
    const middleOfArray = Math.floor(sortedArray.length / 2)

    if (sortedArray.length % 2 === 0) {
      return (Math.floor(sortedArray[middleOfArray - 1]) + sortedArray[middleOfArray]) / 2
    }
    return sortedArray[middleOfArray]
  }

  /**
   * Converts the numbers in the array to their proportional decimal values based on the sum of the array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number[]} - An array where each number represents its proportion of the total sum as a decimal.
   */
  convertToDecimal(numArray) {
    ValidateInput.checkInput(numArray)
    const sumOfArray = this.sum(numArray)
    let result = []

    for (let number of numArray) {
      result.push(number / sumOfArray)
    }
    return result
  }

  /**
   * Converts the numbers in the array to their proportional percentage values based on the sum of the array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number[]} - An array where each number represents its proportion of the total sum as a percentage string.
   */
  convertToPercentage(numArray) {
    ValidateInput.checkInput(numArray)
    let decimalArray = this.convertToDecimal(numArray)
    let result = []

    for (let number of decimalArray) {
      result.push(`${number * 100}%`)
    }
    return result
  }

  /**
   * Calculates the range from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {Array} - Returns the range from the argument array.
   */
  range(numArray) {
    ValidateInput.checkInput(numArray)
    const sortedArray = this.sortByAscending(numArray)

    const smallestNumber = sortedArray[0], biggestNumber = sortedArray[sortedArray.length - 1]
    return biggestNumber - smallestNumber
  }

  /**
   * Calculates the population variance from the argument array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} The population variance.
   */
  populationVariance(numArray) {
    ValidateInput.checkInput(numArray)
    const mean = this.mean(numArray)
    const squaredDifference = VarianceCalculations.squareAndSubtractDifference(numArray, mean)

    return this.mean(squaredDifference)
  }

  /**
   * Calculates the sample variance from the argument array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} The sample variance.
   */
  sampleVariance(numArray) {
    ValidateInput.checkInput(numArray)
    validateLength(numArray)
    const mean = this.mean(numArray)
    const squaredDifference = VarianceCalculations.squareAndSubtractDifference(numArray, mean)

    return VarianceCalculations.calculateSampleVariance(squaredDifference)
  }

  /**
   * Calculates the sample variance from the argument array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} The standard deviation.
   */
  sampleStandardDeviation(numArray) {
    ValidateInput.checkInput(numArray)
    validateLength(numArray)
    return Math.sqrt(this.sampleVariance(numArray))
  }

  /**
   * Calculates the population variance from the argument array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} The standard deviation.
   */
  populationStandardDeviation(numArray) {
    ValidateInput.checkInput(numArray)
    return Math.sqrt(this.populationVariance(numArray))
  }

  /**
   * Calculates the mode from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} - The mode from the argument array.
   */
  mode(numArray) {
    ValidateInput.checkInput(numArray)
    let modeMap = {}
    let maximumCount = 0
    let result

    for (let i = 0; i < numArray.length; i++) {
      let number = numArray[i]

      ModeCalculations.updateModeCount(modeMap, number)

      const modeValues = ModeCalculations.updateMaxMode(modeMap, number, maximumCount)

      if (modeValues !== undefined) {
        [result, maximumCount] = modeValues
      }
    }
    if (result === undefined) {
      return 'No mode available'
    }
    return result
  }

  /**
   * Calculates the median in the 1st and 3rd quartile from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} - The quartile median.
   */
  quartiles(numArray) {
    ValidateInput.checkInput(numArray)
    validateLength(numArray)
    const sortedArray = this.sortByAscending(numArray)

    const Q1 = sortedArray.slice(0,  Math.floor(sortedArray.length / 2))
    const Q3 = getUpperQuartile(sortedArray)
    return [this.median(Q1), this.median(Q3)]
  }

  /**
   * Calculates the range between the quartiles median from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} - The interquartile range.
   */
  interquartileRange(numArray) {
    ValidateInput.checkInput(numArray)
    const [Q1, Q3] = this.quartiles(numArray)
    return Q3 - Q1
  }
}