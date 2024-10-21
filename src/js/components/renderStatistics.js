const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="../../css/renderStatistics.css">
  <div class="MainPage">
    <p class="question"></p>
    <p class="definition"></p>
    <input type="text" class="answer">
    <div class="guide"></div>
    <point-system></point-system>
  </div>
`

class renderStatistics extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
      .appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
   window.addEventListener('statistics-event', (e) => {
    this.renderQuestion(e.detail.question)
    this.renderDefintion(e.detail.definition)
    this.renderGuide(e.detail.guide)
    this.answer(e.detail.answer)
   })
  }

  renderQuestion(event) {
    this.shadowRoot.querySelector('.question').textContent = event.data
  }

  renderDefintion(event) {
    this.shadowRoot.querySelector('.definition').textContent = event.data
  }

  renderGuide(event) {
    this.shadowRoot.querySelector('.guide').textContent = event.data
  }

  answer(event) {
    
  }
}

customElements.define('render-statistics',renderStatistics)