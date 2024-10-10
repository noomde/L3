const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="../../css/sideBar.css">
  <div class="sidebar">
    <ul>
    <li><a href="sum.js">Sum</a></li>
    <li><a href="mean.js">Mean</a></li>
    <li><a href="geometricMean.js">Geometric Mean</a></li>
    <li><a href="harmonicMean.js">Harmonic Mean</a></li>
    <li><a href="median.js"></a>Median</li>
    <li><a href="range.js"></a>Range</li>
    <li><a href="sampleVariance.js"></a>Sample Variance</li>
    <li><a href="sampleStandardDeviation.js">Sample Standard Deviation</a></li>
    <li><a href="mode.js">Mode</a></li>
    <li><a href="quartiles.js"></a>Quartiles</li>
    <li><a href="interquartileRange.js">Interquartile Range</a></li>
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