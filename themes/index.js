import "./persian-light.css";
import "./persian-dark.css";

export function setTheme(name) {
  document.documentElement.setAttribute("data-theme", name);
}
