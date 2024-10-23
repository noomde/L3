import { StatisticalComponent } from '../statisticalComponent.js'

class Range extends StatisticalComponent {
  constructor() {
    super()
    this.rangeGuide = this.CalculationGuide.rangeGuide()
    this.buttonName = 'Range'
    this.numbersArray = this.getRandomArray()
  }

  getGuide() {
    return { 'guide': this.rangeGuide.steps }
  }

  getQuestion() {
    return { 'question': `Calculate the range.` }
  }

  getDefinition() {
    return { 'definition': this.rangeGuide.definition }
  }

  getAnswer() {
    return this.Statistics.range(this.getRandomArray())
  }

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('range-view', Range)