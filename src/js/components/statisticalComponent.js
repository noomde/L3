import { Statistics } from '../../../../Module/src/Statistics.js'
import { CalculationGuide } from '../../../../Module/src/CalculationGuide.js'
import { numArrays } from '../staticData/dataArrays.js'

const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="../../css/sideButtons.css">
    <button class="button"></button>
`

export class StatisticalComponent extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
      .appendChild(template.content.cloneNode(true))

    this.Statistics = new Statistics()
    this.CalculationGuide = new CalculationGuide()
    this.numArrays = numArrays
  }

  connectedCallback() {
    const button = this.shadowRoot.querySelector('.button')
    button.textContent = this.buttonName
    this.shadowRoot.querySelector('.button').addEventListener('click', () => {
      this.dispatchStatisticsEvent()
    })
  }

  getRandomArray() {
    const randomIndex = Math.floor(Math.random() * numArrays.length)
    return numArrays[randomIndex]
  }

  getGuide() {
    return { 'guide': `No guide available.` }
  }

  getQuestion() {
    return { 'question': `No question available.` }
  }

  getDefinition() {
    return { 'definition': `No description available.` }
  }

  getAnswer() {
    return { 'answer': `No answer available.` }
  }

  dispatchStatisticsEvent() {
    this.dispatchEvent(new CustomEvent('statistics-event', {
      detail: {
        guide: this.getGuide(),
        question: this.getQuestion(),
        definition: this.getDefinition(),
        answer: this.getAnswer()
      },
      bubbles: true
    }))
  }
}

