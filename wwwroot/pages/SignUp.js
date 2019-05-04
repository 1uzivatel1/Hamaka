import { Component } from "../web_modules/preact.js";
import { html } from "../utils/html.js";

const initialState = {
  Name: "",
  Email: "",
  Password: ""
};

export class SignUp extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  async onSignUpClick(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      const result = await response.json();
      this.setState(initialState);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  render({}, { todos = [] }) {
    return html`
      <div class="sign-up">
        <form onSubmit=${this.onSignUpClick.bind(this)}>
          <div>
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              value=${this.state.Name}
              onChange=${({ target: { value } }) =>
                this.setState({ Name: value })}
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              value=${this.state.Email}
              onChange=${({ target: { value } }) =>
                this.setState({ Email: value })}
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              value=${this.state.Password}
              onChange=${({ target: { value } }) =>
                this.setState({ Password: value })}
            />
          </div>
          <button onClick=${this.onSignUpClick.bind(this)} role="submit">
            Sign up
          </button>
        </form>
      </div>
    `;
  }
}
