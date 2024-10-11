import { StatisticalComponent } from '../statisticalComponent.js'

class Range extends StatisticalComponent {
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
    return this.Statistics.range(this.getRandomArray())
  }
}
