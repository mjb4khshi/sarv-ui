// 🌿 Sarv UI v0.1.0
// First release — designed & built by MJ
export default function badges({ addComponents, matchComponents, theme }) {
  addComponents({
    ".badge": {
      "@apply inline-flex items-center font-medium rounded-full text-xs px-2 py-0.5":
        {},
    },
  });

  matchComponents(
    {
      badge: (value) => ({
        backgroundColor: theme(`colors.${value}.DEFAULT`),
        color: theme(`colors.${value}.content`),
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
        neutral: "neutral",
      },
    }
  );

  matchComponents(
    {
      "badge-soft": (value) => ({
        backgroundColor: theme(`colors.${value}[300]`),
        color: theme(`colors.${value}.DEFAULT`),
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
        neutral: "neutral",
      },
    }
  );

  matchComponents(
    {
      "badge-outline": (value) => ({
        border: `1px solid ${theme(`colors.${value}.DEFAULT`)}`,
        color: theme(`colors.${value}.DEFAULT`),
        backgroundColor: "transparent",
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
        neutral: "neutral",
      },
    }
  );
}
