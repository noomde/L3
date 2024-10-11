import { StatisticalComponent } from '../statisticalComponent.js'

class SampleStandardDeviation extends StatisticalComponent {
  constructor() {
    super()
  }

  getGuide() {
    return { 'guide': `` }
  }

  getQuestion() {
    return { 'question': `` }
  }

  getDescription() {
    return { 'Description': `` }
  }

  getAnswer() {
    return this.Statistics.sampleStandardDeviation(this.getRandomArray())
  }
}
