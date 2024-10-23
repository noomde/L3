import { StatisticalComponent } from '../statisticalComponent.js'

class GeometricMean extends StatisticalComponent {
  constructor() {
    super()
    this.geometricMeanGuide = this.CalculationGuide.geometricMeanGuide()
    this.buttonName = 'Geometric Mean'
    this.numbersArray = this.getRandomArray()
  }

  getGuide() {
    return { 'guide': this.geometricMeanGuide.steps }
  }

  getQuestion() {
    return { 'question': `Calculate the geometric mean.` }
  }

  getDefinition() {
    return { 'definition': this.geometricMeanGuide.definition }
  }

  getAnswer() {
    return this.Statistics.geometricMean(this.getRandomArray())
  }

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('geometricMean-view', GeometricMean)