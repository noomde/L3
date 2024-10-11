import { StatisticalComponent } from '../statisticalComponent.js'

class Sum extends StatisticalComponent {
  constructor() {
    super()
  }

  getGuide() {
    return { 'guide': `Add all numbers together` }
  }

  getQuestion() {
    return { 'question': `Calculate the sum` }
  }

  getDefinition() {
    return { 'definition': `Get the total amount of the numbers` }
  }

  getAnswer() {
    return this.Statistics.sum(this.getRandomArray())
  }
}

customElements.define('sum-view', Sum)