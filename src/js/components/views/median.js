import { StatisticalComponent } from '../statisticalComponent.js'

class Median extends StatisticalComponent {
  constructor() {
    super()
    this.medianGuide = this.CalculationGuide.medianGuide()
  }

  getGuide() {
    return { 'guide': this.medianGuide.steps }
  }

  getQuestion() {
    return { 'question': `Calculate the median.` }
  }

  getDefinition() {
    return { 'definition': this.medianGuide.definition }
  }

  getAnswer() {
    return this.Statistics.median(this.getRandomArray())
  }
}

customElements.define('median-view', Median)