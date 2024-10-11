const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="../../css/sideBar.css">
  <div class="sidebar">
    <ul>
      <sum-view></sum-view>
      <mean-view></mean-view>
      <geometricMean-view></geometricMean-view>
      <harmonicMean-view></harmonicMean-view>
      <median-view></median-view>
      <variance-view></variance-view>
      <standardDeviation-view></standardDeviation-view>
      <range-view></range-view>
      <quartiles-view></quartiles-view>
      <mode-view></mode-view>
      <interquartilesRange-view></interquartilesRange-view>
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