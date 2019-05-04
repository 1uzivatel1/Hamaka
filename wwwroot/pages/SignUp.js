import { Component } from "../web_modules/preact.js";
import { html } from "../utils/html.js";
import { apiClient } from "../utils/api.js";

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
      const result = await apiClient.post('/api/users', this.state);
      this.setState(initialState);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  render({}, { todos = [] }) {
    return html`
      <section class="sign-up section">
        <div class="container">
          <div className="columns">
            <div className="column is-4 is-offset-4">
              <div className="card">
                <div className="card-header">
                  <p class="card-header-title">
                    Sign up
                  </p>
                </div>
                <div className="card-content">
                  <form
                    autocomplete="off"
                    onSubmit=${this.onSignUpClick.bind(this)}
                    autocomplete="false"
                  >
                    <div class="field">
                      <label class="label" for="name">Name</label>
                      <input
                        class="input"
                        type="text"
                        name="name"
                        value=${this.state.Name}
                        onChange=${({ target: { value } }) =>
                          this.setState({ Name: value })}
                      />
                    </div>
                    <div class="field">
                      <label class="label" for="email">Email</label>
                      <input
                        class="input"
                        type="email"
                        name="email"
                        value=${this.state.Email}
                        onChange=${({ target: { value } }) =>
                          this.setState({ Email: value })}
                      />
                    </div>
                    <div class="field">
                      <label class="label" for="password">Password</label>
                      <input
                        class="input"
                        type="password"
                        name="password"
                        value=${this.state.Password}
                        onChange=${({ target: { value } }) =>
                          this.setState({ Password: value })}
                      />
                    </div>
                    <button
                      class="button is-primary"
                      onClick=${this.onSignUpClick.bind(this)}
                      role="submit"
                    >
                      Sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
