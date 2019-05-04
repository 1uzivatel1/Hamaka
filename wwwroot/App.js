import { render, Component } from "./web_modules/preact.js";
import { Router } from "./web_modules/preact-router.js";
import { html } from "./utils/html.js";
import { SignUp } from "./pages/SignUp.js";

class App extends Component {
  addTodo() {
    const todos = this.state.todos || [];
    this.setState({ todos: todos.concat(`Item ${todos.length}`) });
  }

  render({}, { todos = [] }) {
    return html`
      <${Router}>
        <${SignUp} path="/" />
      <//>
    `;
  }
}

render(
  html`
    <${App} />
  `,
  document.getElementById("__root__")
);
