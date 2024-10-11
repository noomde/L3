import { StatisticalComponent } from '../statisticalComponent.js'

class Median extends StatisticalComponent {
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
    return this.Statistics.median(this.getRandomArray())
  }
}
