import { StatisticalComponent } from '../statisticalComponent.js'

class GeometricMean extends StatisticalComponent {
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
    return this.Statistics.geometricMean(this.getRandomArray())
  }
}
