import Component from "../Component/Component.js";

class App extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");
  }

  protected populate(): void {
    this.element.innerHTML = `
  <header class= "main-header">
  <img src="./images/pokemon-logo.svg" alt="Pokemon logo">
  </header>
  <main class= "main-container">
  </main>
  `;
  }
}

export default App;
