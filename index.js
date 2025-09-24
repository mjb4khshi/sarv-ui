// 🌿 Sarv UI v0.1.0
// First release — designed & built by MJ
import plugin from "tailwindcss/plugin.js";
import colors from "./src/tokens/colors.js";
import checkbox from "./src/components/checkbox.js";
import button from "./src/components/button.js";
import badge from "./src/components/badge.js";
import radio from "./src/components/radio.js";
import cbAnimate from "./src/tokens/custom-utility.js";
import shadows from "./src/tokens/shadow.js";
import radiusTokens from "./src/tokens/radiuses.js";
export default plugin(function (api) {
  colors(api);
  radiusTokens(api);
  checkbox(api);
  button(api);
  badge(api);
  radio(api);
  cbAnimate(api);
  shadows(api);
});

export {
  shadows,
  radiusTokens,
  cbAnimate,
  colors,
  checkbox,
  button,
  badge,
  radio,
};
