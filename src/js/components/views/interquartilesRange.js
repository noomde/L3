import { StatisticalComponent } from '../statisticalComponent.js'

class InterquartileRange extends StatisticalComponent {
  constructor() {
    super()
    this.interquartileRangeGuide = this.CalculationGuide.interquartileRangeGuide()
    this.buttonName = 'Interquartile Range'
  }

  getGuide() {
    return { 'guide': this.interquartileRangeGuide.steps }
  }

  getQuestion() {
    return { 'question': `Find the interquartile range.` }
  }

  getDefinition() {
    return { 'definition': this.interquartileRangeGuide.definition }
  }

  getAnswer() {
    return this.Statistics.interquartilesRange(this.getRandomArray())
  }
}

customElements.define('interquartilesRange-view', InterquartileRange)