export default function checkbox({
  addComponents,
  addUtilities,
  matchUtilities,
  theme,
  matchComponents,
}) {
  addComponents({
    ".checkbox-wrap": { "@apply inline-block size-fit relative": {} },
    ".checkbox": {
      "@apply inline absolute inset-0 m-0 appearance-none cursor-pointer opacity-0":
        {},
    },
    ".checkbox-mask": {
      "@apply flex relative items-center justify-center rounded-checkbox pointer-events-none size-5":
        {},
      transition:
        "box-shadow 0.25s ease, background-color 0.25s ease, transform 0.25s ease, opacity 0.25s ease",
    },
    ".checkbox-mask::after": {
      content: '""',
      "@apply absolute inset-0 bg-current z-1 rounded-[inherit] opacity-0": {},
      transition:
        "transform 0.25s ease, opacity 0.25s ease, box-shadow 0.25s ease",
    },
    ".checkbox:not(:checked) ~ .checkbox-mask": {
      boxShadow: "inset 0 0 0 2px var(--color-base-500)",
    },
    ".checkbox:not(:checked):hover ~ .checkbox-mask": {
      "@apply bg-base-500": {},
      boxShadow: "inset 0 0 0 var(--color-base-500)",
    },
    ".checkbox:checked ~ .checkbox-mask": { "@apply bg-base-500": {} },
    ".checkbox-icon": { "@apply absolute z-2 w-4/5 h-4/5": {} },
    ".checkbox-icon path, .checkbox-icon line, .checkbox-icon polyline": {
      "@apply stroke-2 fill-none cb-animate": {},
    },
    ".checkbox:checked ~ .checkbox-mask::after": {
      "@apply opacity-[1] transform-[scale(1)] delay-0": {},
      boxShadow: "0 0 0px currentColor",
      transition: "all 0.25s ease",
    },
    ".checkbox:checked:hover ~ .checkbox-mask::after": {
      "@apply opacity-[1] transform-[scale(1)] delay-0": {},
      boxShadow: "0 0 2px currentColor",
      transition: "all 0.25s ease",
    },
    ".checkbox:checked ~ .checkbox-mask .checkbox-icon path, .checkbox:checked ~ .checkbox-mask .checkbox-icon line, .checkbox:checked ~ .checkbox-mask .checkbox-icon polyline":
      { "@apply delay-200": {}, strokeDashoffset: 0 },
    ".checkbox:not(:checked) ~ .checkbox-mask .checkbox-icon path, .checkbox:not(:checked) ~ .checkbox-mask .checkbox-icon line, .checkbox:not(:checked) ~ .checkbox-mask .checkbox-icon polyline":
      { "@apply delay-0": {}, strokeDashoffset: 200 },
    ".checkbox:not(:checked) ~ .checkbox-mask::after": {
      boxShadow: "0 0 0 0px currentColor",
      "@apply opacity-0 transform-[scale(0.8)] delay-500": {},
    },
    ".checkbox:disabled": { "@apply cursor-not-allowed opacity-50": {} },
    ".checkbox:checked:disabled ~ .checkbox-mask": {
      "@apply cursor-not-allowed text-neutral": {},
    },
  });
  addUtilities({
    ".cb-animate": {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeDasharray: "200",
      strokeDashoffset: "200",
      transition: "stroke-dashoffset 1.1s ease-in-out",
    },
  });
  // --- add below your existing addComponents(...) ---
  // JIT: colors (فقط color روی wrapper ست می‌شه → bg-current و stroke-current تو CSS فعلی‌ات کار می‌کنن)

  // 1) JIT: سایزهای نام‌گذاری‌شده (xs..4xl) — توصیه: این کلاس رو روی .checkbox-wrap بزن
  matchUtilities(
    {
      checkbox: (value) => ({
        // متغیر ارث‌پذیر؛ اگر روی .checkbox-wrap ست بشه، به ماسک هم می‌رسه
        "--cb-size": value,
      }),
    },
    {
      values: {
        xs: theme("spacing.3"),
        sm: theme("spacing.4"),
        md: theme("spacing.5"),
        lg: theme("spacing.6"),
        xl: theme("spacing.7"),
        "2xl": theme("spacing.8"),
        "3xl": theme("spacing.9"),
        "4xl": theme("spacing.10"),
      },
    }
  );

  // 2) مصرف متغیر سایز در ماسک (بدون تغییر ظاهر پیش‌فرض)
  addComponents({
    ".checkbox-mask": {
      // فالبک همون اندازه‌ی قبلیت
      width: "var(--cb-size, theme(spacing.5))",
      height: "var(--cb-size, theme(spacing.5))",
    },
  });
  matchComponents(
    {
      checkbox: (value) => ({
        color: theme(`colors.${value}.DEFAULT`),
        stroke: theme(`colors.${value}.content`),
      }),
    },
    {
      values: {
        primary: "primary",
        success: "success",
        warn: "warn",
        info: "info",
        secondary: "secondary",
        danger: "danger",
        accent: "accent",
      },
    }
  );
}
// 3) سازگاری با استفاده‌ی سایز روی input (بدون تغییر HTML):
// اگر کلاس سایز رو روی خود input بزنی، این قوانین اندازه‌ی ماسک رو ست می‌کنن.
