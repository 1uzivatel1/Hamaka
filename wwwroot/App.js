import { render } from "./web_modules/preact.js";
import { Router } from "./web_modules/preact-router.js";
import { html } from "./utils/html.js";
import { SignUp } from "./pages/SignUp.js";

const App = () => {
  return html`
    <${Router}>
      <${SignUp} path="/" />
    <//>
  `;
};

render(
  html`
    <${App} />
  `,
  document.getElementById("__root__")
);
