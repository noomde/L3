import { StatisticalComponent } from '../statisticalComponent.js'

class SampleVariance extends StatisticalComponent {
  constructor() {
    super()
    this.varianceGuide = this.CalculationGuide.varianceGuide()
    this.buttonName = 'Variance'
    this.numbersArray = this.getRandomArray()
  }

  getGuide() {
    return this.varianceGuide.steps
  }

  getQuestion() {
    return `Calculate the sample variance`
  }

  getDefinition() {
    return this.varianceGuide.definition
  }

  getAnswer() {
    return this.Statistics.sampleVariance(this.numbersArray)
  }

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('variance-view', SampleVariance)