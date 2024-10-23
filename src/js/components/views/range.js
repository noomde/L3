import { StatisticalComponent } from '../statisticalComponent.js'

class Range extends StatisticalComponent {
  constructor() {
    super()
    this.rangeGuide = this.CalculationGuide.rangeGuide()
    this.buttonName = 'Range'
    this.numbersArray = this.getRandomArray()
  }

  getGuide() {
    return this.rangeGuide.steps
  }

  getQuestion() {
    return `Calculate the range.`
  }

  getDefinition() {
    return this.rangeGuide.definition
  }

  getAnswer() {
    return this.Statistics.range(this.numbersArray)
  }

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('range-view', Range)