import { StatisticalComponent } from '../statisticalComponent.js'

class Range extends StatisticalComponent {
  constructor() {
    super()
    this.rangeGuide = this.CalculationGuide.rangeGuide()
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
}

customElements.define('range-view', Range)