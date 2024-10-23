import { StatisticalComponent } from '../statisticalComponent.js'

class InterquartileRange extends StatisticalComponent {
  constructor() {
    super()
    this.interquartileRangeGuide = this.CalculationGuide.interquartileRangeGuide()
    this.buttonName = 'Interquartile Range'
    this.numbersArray = this.getRandomArray()
  }

  getGuide() {
    return this.interquartileRangeGuide.steps
  }

  getQuestion() {
    return `Find the interquartile range.`
  }

  getDefinition() {
    return this.interquartileRangeGuide.definition
  }

  getAnswer() {
    return this.Statistics.interquartileRange(this.numbersArray)
  }

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('interquartilesrange-view', InterquartileRange)