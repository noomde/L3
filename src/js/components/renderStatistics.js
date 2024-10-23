import { AnswerCorrection } from '../staticJs/answerCorrection.js'

const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="../../css/renderStatistics.css">
  <div class="MainPage">
    <p class="question"></p>
    <p class="numbers"></p>
    <p class="definition"></p>
    <input type="text" class="answer">
    <p class="response"></p>
    <div class="guide"></div>
    <point-system></point-system>
  </div>
`

class renderStatistics extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
      .appendChild(template.content.cloneNode(true))
    this.correctAnswer = null
  }

  connectedCallback() {
    window.addEventListener('statistics-event', (e) => {
      this.renderQuestion(e.detail.question)
      this.renderDefintion(e.detail.definition)
      this.renderGuide(e.detail.guide)
      this.renderNumbers(e.detail.numbers)
      this.correctAnswer = e.detail.answer
    })

    this.shadowRoot.querySelector('.answer').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.checkAnswer(this.correctAnswer)
      }
    })
  }

  renderQuestion(event) {
    this.shadowRoot.querySelector('.question').innerHTML = event
  }

  renderDefintion(event) {
    this.shadowRoot.querySelector('.definition').innerHTML = event
  }

  renderGuide(event) {
    const guideElement = this.shadowRoot.querySelector('.guide')
    guideElement.innerHTML = ''

    if (Array.isArray(event)) {
      for (let i = 0; i < event.length; i++) {
        const pElement = document.createElement('p')
        pElement.textContent = event[i]
        guideElement.append(pElement)
      }
    }
  }

  renderNumbers(event) {
    this.shadowRoot.querySelector('.numbers').innerHTML = event.join(', ')
  }

  checkAnswer(correctAnswer) {
    const guessedAnswer = this.shadowRoot.querySelector('.answer').value
    const isCorrect = AnswerCorrection.isCorrectAnswer(guessedAnswer, correctAnswer)

    this.renderResponse(isCorrect)
    if (isCorrect) {
      window.dispatchEvent(new Event('add-points'))
    }
  }

  renderResponse(isCorrect) {
    const responseElement = this.shadowRoot.querySelector('.response')
    if (isCorrect) {
      responseElement.textContent = 'Correct Answer'
    } else {
      responseElement.textContent = 'Wrong Answer, try again'
    }
  }
}

customElements.define('render-statistics', renderStatistics)