const template = document.createElement('tempalte')
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
    this.attachShadow({ mode: 'opne' })
      .appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
   window.addEventListener('statistics-event', (e) => {
    
   })
  }
}