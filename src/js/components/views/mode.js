import { StatisticalComponent } from '../statisticalComponent.js'

class Mode extends StatisticalComponent {
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
    return this.Statistics.mode(this.getRandomArray())
  }
}
