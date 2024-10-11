import { StatisticalComponent } from '../statisticalComponent.js'

class SampleVariance extends StatisticalComponent {
  constructor() {
    super()
  }

  getGuide() {
    return { 'guide': `<p>Add all numbers together</p>` }
  }

  getQuestion() {
    return { 'question': `<p>Calculate the sum</p>` }
  }

  getDescription() {
    return { 'Description': `<p>Get the total amount of the numbers</p>` }
  }

  getAnswer() {
    return this.Statistics.sampleVariance(this.getRandomArray())
  }
}

customElements.define('variance-view', SampleVariance)