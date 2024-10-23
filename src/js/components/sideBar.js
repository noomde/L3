const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="../../css/sideBar.css">
  <div class="sidebar">
    <ul>
      <sum-view></sum-view>
      <mean-view></mean-view>
      <geometricmean-view></geometricmean-view>
      <harmonicmean-view></harmonicmean-view>
      <median-view></median-view>
      <variance-view></variance-view>
      <standarddeviation-view></standarddeviation-view>
      <range-view></range-view>
      <mode-view></mode-view>
      <interquartilesrange-view></interquartilesrange-view>
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