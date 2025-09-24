
// 🌿 Sarv UI v0.2.6
// Built with care by MJ
export default function radio({
  addComponents,
  matchComponents,
  matchUtilities,
  theme,
}) {
  addComponents({
    ".radio-wrap": { "@apply inline-block size-fit relative": {} },

    ".radio": {
      "@apply inline absolute inset-0 m-0 appearance-none cursor-pointer opacity-0":
        {},
    },

    ".radio-mask": {
      "@apply flex relative items-center justify-center rounded-full pointer-events-none":
        {},
      width: "var(--rd-size, theme(spacing.5))",
      height: "var(--rd-size, theme(spacing.5))",
      transition:
        "box-shadow 0.25s ease, background-color 0.25s ease, transform 0.25s ease, opacity 0.25s ease",
    },

    ".radio-mask::after": {
      content: '""',
      "@apply absolute inset-0 rounded-full bg-current": {},
      transform: "scale(0.7)", 
      opacity: "0",
      transition:
        "transform 0.25s ease, opacity 0.25s ease, box-shadow 0.25s ease",
    },

    ".radio:not(:checked) ~ .radio-mask": {
      boxShadow: "inset 0 0 0 2px var(--color-base-500)",
    },

    ".radio:not(:checked):hover ~ .radio-mask": {
      "@apply bg-base-500": {},
      boxShadow: "inset 0 0 0 var(--color-base-500)",
    },

    ".radio:checked ~ .radio-mask": {
      boxShadow: "none",
    },
    ".radio:checked ~ .radio-mask::after": {
      transform: "scale(1)",
      opacity: "1",
      boxShadow: "0 0 0px currentColor",
    },

    ".radio:checked:hover ~ .radio-mask::after": {
      transform: "scale(1)",
      opacity: "1",
      boxShadow: "0 0 2px currentColor",
    },

    ".radio:disabled": { "@apply cursor-not-allowed opacity-50": {} },
    ".radio:checked:disabled ~ .radio-mask": {
      "@apply cursor-not-allowed text-neutral": {},
    },
  });

  matchUtilities(
    {
      radio: (value) => ({
        "--rd-size": value,
      }),
    },
    {
      values: {
        sm: theme("spacing.4"),
        md: theme("spacing.5"),
        lg: theme("spacing.6"),
      },
    }
  );

  matchComponents(
    {
      radio: (value) => ({
        "& ~ .radio-mask": {
          color: theme(`colors.${value}.DEFAULT`),
        },
      }),
    },
    {
      values: {
        primary: "primary",
        success: "success",
        warn: "warn",
        danger: "danger",
        secondary: "secondary",
        info: "info",
        accent: "accent",
      },
    }
  );
}
