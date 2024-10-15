import { StatisticalComponent } from '../statisticalComponent.js'

class SampleVariance extends StatisticalComponent {
  constructor() {
    super()
    this.varianceGuide = this.CalculationGuide.varianceGuide()
    this.buttonName = 'Variance'
  }

  getGuide() {
    return { 'guide': this.varianceGuide.steps }
  }

  getQuestion() {
    return { 'question': `Calculate the sample variance` }
  }

  getDefinition() {
    return { 'definition': this.varianceGuide.definition }
  }

  getAnswer() {
    return this.Statistics.sampleVariance(this.getRandomArray())
  }
}

customElements.define('variance-view', SampleVariance)