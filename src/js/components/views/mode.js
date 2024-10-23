import { StatisticalComponent } from '../statisticalComponent.js'

class Mode extends StatisticalComponent {
  constructor() {
    super()
    this.modeGuide = this.CalculationGuide.modeGuide()
    this.buttonName = 'Mode'
    this.numbersArray = this.getRandomArray()
  }

  getGuide() {
    return { 'guide': this.modeGuide.steps }
  }

  getQuestion() {
    return { 'question': `Find the first mode from left to right.` }
  }

  getDefinition() {
    return { 'definition': this.modeGuide.definition }
  }

  getAnswer() {
    return this.Statistics.mode(this.getRandomArray())
  }

  getNumberArray() {
    return this.numbersArray
  }
}

customElements.define('mode-view', Mode)