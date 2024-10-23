import { StatisticalComponent } from '../statisticalComponent.js'

class Mode extends StatisticalComponent {
  constructor() {
    super()
    this.modeGuide = this.CalculationGuide.modeGuide()
    this.buttonName = 'Mode'
    this.numbersArray = this.getRandomArray()
  }

  getGuide() {
    return this.modeGuide.steps
  }

  getQuestion() {
    return `Find the first mode from left to right.`
  }

  getDefinition() {
    return this.modeGuide.definition
  }

  getAnswer() {
    return this.Statistics.mode(this.numbersArray)
  }

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('mode-view', Mode)