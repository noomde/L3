const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="../../css/sideBar.css">
  <div class="sidebar">
    <ul>
      <sum-view></sum-view>
    </ul>
  </div>
`

class SideBar extends HTMLElement {

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
      .appendChild(template.content.cloneNode(true))
  }
}

customElements.define('side-bar', SideBar)