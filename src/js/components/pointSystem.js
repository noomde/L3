const template = document.createElement('template')
template.innerHTML = `
  <span class="points">0</span>
`

class PointSystem extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
      .appendChild(template.content.cloneNode(true))
    this.points = 0
  }

  connectedCallback() {
    window.addEventListener('add-points', () => {
      this.addPoints()
    })
  }

  addPoints() {
    this.points ++
    this.renderPoints()
  }

  renderPoints() {
    this.shadowRoot.querySelector('.points').textContent = this.points
  }
}

customElements.define('point-system', PointSystem)