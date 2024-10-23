import { StatisticalComponent } from '../statisticalComponent.js'

class SampleStandardDeviation extends StatisticalComponent {
  constructor() {
    super()
    this.standardDeviationGuide = this.CalculationGuide.standardDeviationGuide()
    this.buttonName = 'Standard Deviation'
    this.numbersArray = this.getRandomArray()
  }

  getGuide() {
    return { 'guide': this.standardDeviationGuide.steps }
  }

  getQuestion() {
    return { 'question': `Calculate the standard deviation.` }
  }

  getDefinition() {
    return { 'definition': this.standardDeviationGuide.definition }
  }

  getAnswer() {
    return this.Statistics.sampleStandardDeviation(this.getRandomArray())
  }

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('standardDeviation-view', SampleStandardDeviation)