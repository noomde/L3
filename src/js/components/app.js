const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="../../css/app.css">
  <div class="main">
    <side-bar></side-bar>
    <render-statistics></render-statistics>
  </div>
`

class App extends HTMLElement {

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
      .appendChild(template.content.cloneNode(true))
  }
}

customElements.define('app-root', App)