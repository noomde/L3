import { StatisticalComponent } from '../statisticalComponent.js'

class HarmonicMean extends StatisticalComponent {
  constructor() {
    super()
    this.harmonicMeanGuide = this.CalculationGuide.harmonicMeanGuide()
    this.buttonName = 'Harmonic Mean'
    this.numbersArray = this.getRandomArray()
  }

  getGuide() {
    return this.harmonicMeanGuide.steps
  }

  getQuestion() {
    return `Calculate the hamonic mean.`
  }

  getDefinition() {
    return this.harmonicMeanGuide.definition
  }

  getAnswer() {
    return this.Statistics.harmonicMean(this.numbersArray)
  }

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('harmoinicmean-view', HarmonicMean)