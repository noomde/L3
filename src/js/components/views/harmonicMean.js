import { StatisticalComponent } from '../statisticalComponent.js'

class HarmonicMean extends StatisticalComponent {
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
    return this.Statistics.harmonicMean(this.getRandomArray())
  }
}
