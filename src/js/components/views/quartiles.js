import { StatisticalComponent } from '../statisticalComponent.js'

class Quartiles extends StatisticalComponent {
  constructor() {
    super()
    this.quartilesGuide = this.CalculationGuide.quartilesGuide()
  }

  getGuide() {
    return { 'guide': this.quartilesGuide.steps }
  }

  getQuestion() {
    return { 'question': `Calculate the quartiles median.` }
  }

  getDefinition() {
    return { 'definition': this.quartilesGuide.definition }
  }

  getAnswer() {
    return this.Statistics.quartiles(this.getRandomArray())
  }
}

customElements.define('quartiles.view', Quartiles)