import { StatisticalComponent } from '../statisticalComponent.js'

class Sum extends StatisticalComponent {
  constructor() {
    super()
    this.buttonName = 'Sum'
    this.numbersArray = this.getRandomArray()
  }

  getGuide() {
    return { 'guide': `Add all numbers together` }
  }

  getQuestion() {
    return { 'question': `Calculate the sum` }
  }

  getDefinition() {
    return { 'definition': `Get the total amount of the numbers` }
  }

  getAnswer() {
    return this.Statistics.sum(this.numbersArray)
  }

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('sum-view', Sum)