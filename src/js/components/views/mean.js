import { StatisticalComponent } from '../statisticalComponent.js'

class Mean extends StatisticalComponent {
  constructor() {
    super()
    this.meanGuide = this.CalculationGuide.meanGuide()
    this.buttonName = 'Mean'
    this.numbersArray = this.getRandomArray()
  }

  getGuide() {
    return { 'guide': this.meanGuide.steps }
  }

  getQuestion() {
    return { 'question': `Calculate the mean.` }
  }

  getDefinition() {
    return { 'definition': this.meanGuide.definition }
  }

  getAnswer() {
    return this.Statistics.mean(this.getRandomArray())
  }

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('mean-view', Mean)