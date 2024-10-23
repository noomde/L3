import { StatisticalComponent } from '../statisticalComponent.js'

class HarmonicMean extends StatisticalComponent {
  constructor() {
    super()
    this.harmonicMeanGuide = this.CalculationGuide.harmonicMeanGuide()
    this.buttonName = 'Harmonic Mean'
    this.numbersArray = this.getRandomArray()
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

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('harmoinicMean', HarmonicMean)