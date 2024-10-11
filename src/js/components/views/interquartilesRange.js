import { StatisticalComponent } from '../statisticalComponent.js'

class InterquartilesRange extends StatisticalComponent {
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
    return this.Statistics.interquartilesRange(this.getRandomArray())
  }
}
