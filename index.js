// 🌿 Sarv UI v0.1.0
// First release — designed & built by MJ
import plugin from "tailwindcss/plugin.js";
import checkbox from "./src/components/checkbox.js";
import button from "./src/components/button.js";
import badge from "./src/components/badge.js";
import radio from "./src/components/radio.js";

export default plugin(function (api) {
  checkbox(api);
  button(api);
  badge(api);
  radio(api);
});
export { checkbox, button, badge, radio };
