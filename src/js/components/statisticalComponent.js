import { Statistics } from '../../../../Module/src/Statistics.js'
import { CalculationGuide } from '../../../../Module/src/CalculationGuide.js'

export class StatisticalComponent extends HTMLElement {
  constructor() {
    super()
    this.Statistics = new Statistics()
    this.CalculationGuide = new CalculationGuide()
  }

  renderGuide() {
    return
  }

  renderQuestion() {
    return
  }

  renderDescription() {
    return
  }

  render() {
    return `
      <div class="guide">${this.renderGuide()}</div>
      <div class="question">${this.renderQuestion()}</div>
      <div class="description">${this.renderDescription()}</div>
    `
  }
}

