/**
 * Used to check inputs for the main class.
 */
export class ValidateInput {

  /**
  * Checks every value in the array to ensure they are numbers.
  *
  * @param {number[]} numArray - An array of numbers.
  * @throws {TypeError} - Throws an error if any value in the array is not a number.
  */
  static #checkTypes(numArray) {
    for (let i = 0; i < numArray.length; i++) {
      if (typeof numArray[i] === 'string') {
        throw new TypeError(`You have entered the type string on index ${i}. The program can only handle the type number.`)
      }
      if (typeof numArray[i] === 'object') {
        throw new TypeError(`You have entered the type object on index ${i}. The program can only handle the type number.`)
      }
      if (typeof numArray[i] === 'boolean') {
        throw new TypeError(`You have entered the type boolean on index ${i}. The program can only handle the type number.`)
      }
      if (typeof numArray[i] === 'undefined') {
        throw new TypeError(`You have entered the type undefined on index ${i}. The program can only handle the type number.`)
      }
      if (isNaN(numArray[i])) {
        throw new TypeError(`You have entered the type number NaN on index ${i}. The program can not handle NaN. Please remove NaN and try again.`)
      }
      else if (typeof numArray[i] !== 'number') {
        throw new TypeError('The array can only handle numbers.')
      }
    }
  }

  /**
   * Checks if the argument is an array of numbers.
   *
   * @param {number[]} numArray - An array of numbers.
   * @throws {TypeError} - Throws an error if the input is not an array or contains non-number elements.
   */
  static checkInput(numArray) {
    if (!Array.isArray(numArray)) {
      throw new TypeError('The argument needs to be an Array.')
    } else if (numArray.length === 0) {
      throw new TypeError('The argument can not be empty')
    }
    this.#checkTypes(numArray)
    return true
  }
}
