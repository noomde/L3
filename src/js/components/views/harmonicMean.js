import { StatisticalComponent } from '../statisticalComponent.js'

class HarmonicMean extends StatisticalComponent {
  constructor() {
    super()
    this.harmonicMeanGuide = this.CalculationGuide.harmonicMeanGuide()
  }

  getGuide() {
    return { 'guide': this.harmonicMeanGuide.steps }
  }

  getQuestion() {
    return { 'question': `Calculate the hamonic mean.` }
  }

  getDefinition() {
    return { 'definition': this.harmonicMeanGuide.definition }
  }

  getAnswer() {
    return this.Statistics.harmonicMean(this.getRandomArray())
  }
}

customElements.define('harmoinicMean', HarmonicMean)