import { StatisticalComponent } from '../statisticalComponent.js'

class Median extends StatisticalComponent {
  constructor() {
    super()
    this.medianGuide = this.CalculationGuide.medianGuide()
    this.buttonName = 'Median'
    this.numbersArray = this.getRandomArray()
  }

  getGuide() {
    return this.medianGuide.steps
  }

  getQuestion() {
    return `Calculate the median.`
  }

  getDefinition() {
    return this.medianGuide.definition
  }

  getAnswer() {
    return this.Statistics.median(this.numbersArray)
  }

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('median-view', Median)