import { Statistics } from '../../../../Module/src/Statistics.js'
import { CalculationGuide } from '../../../../Module/src/CalculationGuide.js'
const template = document.createElement('template')
template.innerHTML = `
    <button class="button"></button>
`

export class StatisticalComponent extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ moide: 'open' })
      .appendChild(template.content.cloneNode(true))

    this.Statistics = new Statistics()
    this.CalculationGuide = new CalculationGuide()
  }

  connectedCallback() {
    this.dispatchStatisticsEvent()
  }

  getGuide() {
    return { 'guide': `<p>No guide available.</p>` }
  }

  getQuestion() {
    return { 'question': `<p>No question available.</p>` }
  }

  getDescription() {
    return { 'description': `<p>No description available.</p>` }
  }

  getAnswer() {
    return { 'answer': `<p>No answer available.</p>`}
  }

  dispatchStatisticsEvent() {
    
  }
}

