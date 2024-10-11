import { Statistics } from '../../../../Module/src/Statistics.js'
import { CalculationGuide } from '../../../../Module/src/CalculationGuide.js'
import { numArrays } from '../staticData/dataArrays.js'

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
    this.numArrays = numArrays
  }

  connectedCallback() {
    this.dispatchStatisticsEvent()
  }

  getRandomArray() {
    const randomIndex = Math.floor(Math.random() * numArrays.length)
    return numArrays[randomIndex]
  }

  getGuide() {
    return { 'guide': `<p>No guide available.</p>` }
  }

  getQuestion() {
    return { 'question': `<p>No question available.</p>` }
  }

  getDefinition() {
    return { 'definition': `<p>No description available.</p>` }
  }

  getAnswer() {
    return { 'answer': `<p>No answer available.</p>`}
  }

  dispatchStatisticsEvent() {
    
  }
}

