import { StatisticalComponent } from '../statisticalComponent.js'

class Mean extends StatisticalComponent {
  constructor() {
    super()
    this.meanGuide = this.CalculationGuide.meanGuide()
    this.buttonName = 'Mean'
    this.numbersArray = this.getRandomArray()
  }

  getGuide() {
    return this.meanGuide.steps
  }

  getQuestion() {
    return `Calculate the mean.`
  }

  getDefinition() {
    return this.meanGuide.definition
  }

  getAnswer() {
    return this.Statistics.mean(this.numbersArray)
  }

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('mean-view', Mean)