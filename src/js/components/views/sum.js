import { StatisticalComponent } from '../statisticalComponent.js'

class Sum extends StatisticalComponent {
  constructor() {
    super()
    this.buttonName = 'Sum'
    this.numbersArray = this.getRandomArray()
  }

  getGuide() {
    return `Add all numbers together`
  }

  getQuestion() {
    return `Calculate the sum`
  }

  getDefinition() {
    return `Get the total amount of the numbers`
  }

  getAnswer() {
    return this.Statistics.sum(this.numbersArray)
  }

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('sum-view', Sum)