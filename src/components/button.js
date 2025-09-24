export default function button({ addComponents, matchComponents, theme }) {
  // بیس دکمه
  addComponents({
    ".btn": {
      "@apply flex cursor-pointer gap-0 items-center justify-center rounded-button font-medium transition-all duration-200":
        {},
      padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
      "&:hover": { transform: "scale(1.02)" },
      "&:active": { transform: "scale(0.98)" },
    },
  });

  // حالت Solid (پیش‌فرض)
  matchComponents(
    {
      btn: (value) => ({
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
      "btn-soft": (value) => ({
        backgroundColor: theme(`colors.${value}[300]`),
        color: theme(`colors.${value}.DEFAULT`),
        "&:hover": {
          backgroundColor: theme(`colors.${value}.DEFAULT`),
          color: theme(`colors.${value}.content`),
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
        neutral: "neutral",
      },
    }
  );

  // حالت Outline
  matchComponents(
    {
      "btn-outline": (value) => ({
        border: `2px solid ${theme(`colors.${value}.DEFAULT`)}`,
        color: theme(`colors.${value}.DEFAULT`),
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: theme(`colors.${value}.DEFAULT`),
          color: theme(`colors.${value}.content`),
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
        neutral: "neutral",
      },
    }
  );

  // سایزها
  matchComponents(
    {
      btn: (value) => ({
        fontSize: theme(`fontSize.${value}`)[0],
        lineHeight: theme(`fontSize.${value}`)[1].lineHeight,
        padding:
          value === "xs"
            ? `${theme("spacing.1")} ${theme("spacing.2")}`
            : value === "sm"
            ? `${theme("spacing.1.5")} ${theme("spacing.3")}`
            : value === "md"
            ? `${theme("spacing.2")} ${theme("spacing.4")}`
            : value === "lg"
            ? `${theme("spacing.2.5")} ${theme("spacing.5")}`
            : `${theme("spacing.3")} ${theme("spacing.6")}`,
      }),
    },
    {
      values: {
        xs: "xs",
        sm: "sm",
        md: "base",
        lg: "lg",
        xl: "xl",
      },
    }
  );
}
