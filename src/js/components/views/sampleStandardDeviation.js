import { StatisticalComponent } from '../statisticalComponent.js'

class SampleStandardDeviation extends StatisticalComponent {
  constructor() {
    super()
    this.standardDeviationGuide = this.CalculationGuide.standardDeviationGuide()
    this.buttonName = 'Standard Deviation'
    this.numbersArray = this.getRandomArray()
  }

  getGuide() {
    return this.standardDeviationGuide.steps
  }

  getQuestion() {
    return `Calculate the standard deviation.`
  }

  getDefinition() {
    return this.standardDeviationGuide.definition
  }

  getAnswer() {
    return this.Statistics.sampleStandardDeviation(this.numbersArray)
  }

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('standarddeviation-view', SampleStandardDeviation)