import { createElement } from "../web_modules/preact.js";
import htm from "../web_modules/htm.js";

export const html = htm.bind(createElement);
