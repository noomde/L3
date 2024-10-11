import { StatisticalComponent } from '../statisticalComponent.js'

class quartiles extends StatisticalComponent {
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
    return this.Statistics.quartiles(this.getRandomArray())
  }
}
