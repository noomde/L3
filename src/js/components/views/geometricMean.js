import { StatisticalComponent } from '../statisticalComponent.js'

class GeometricMean extends StatisticalComponent {
  constructor() {
    super()
    this.geometricMeanGuide = this.CalculationGuide.geometricMeanGuide()
    this.buttonName = 'Geometric Mean'
    this.numbersArray = this.getRandomArray()
  }

  getGuide() {
    return this.geometricMeanGuide.steps 
  }

  getQuestion() {
    return `Calculate the geometric mean.`
  }

  getDefinition() {
    return this.geometricMeanGuide.definition
  }

  getAnswer() {
    return this.Statistics.geometricMean(this.numbersArray)
  }

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('geometricmean-view', GeometricMean)