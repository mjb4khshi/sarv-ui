export default function badges({ addComponents, matchComponents, theme }) {
  // بیس بج
  addComponents({
    ".badge": {
      "@apply inline-flex items-center font-medium rounded-full text-xs px-2 py-0.5":
        {},
    },
  });

  // حالت Solid
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

  // حالت Soft
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

  // حالت Outline
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
