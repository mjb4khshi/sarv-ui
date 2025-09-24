export default function radiusTokens({ addBase }) {
  addBase({
    ":root": {
      "--radius-checkbox": "var(--theme-radius-checkbox)",
      "--radius-button": "var(--theme-radius-button)",
      "--radius-card": "var(--theme-radius-card)",
    },
  });
}
