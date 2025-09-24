export default function shadows({ addUtilities }) {
  addUtilities({
    ".sarv-shadow-1": {
      boxShadow: "0 1px 2px rgba(var(--shadow-color), 0.1)",
    },
    ".sarv-shadow-2": {
      boxShadow:
        "0 1px 3px rgba(var(--shadow-color), 0.08), 0 1px 2px rgba(var(--shadow-color), 0.06)",
    },
    ".sarv-shadow-3": {
      boxShadow:
        "0 4px 6px rgba(var(--shadow-color), 0.1), 0 2px 4px rgba(var(--shadow-color), 0.06)",
    },
    ".sarv-shadow-4": {
      boxShadow:
        "0 10px 15px rgba(var(--shadow-color), 0.15), 0 4px 6px rgba(var(--shadow-color), 0.1)",
    },
    ".sarv-shadow-5": {
      boxShadow:
        "0 20px 25px rgba(var(--shadow-color), 0.2), 0 10px 10px rgba(var(--shadow-color), 0.15)",
    },
    ".sarv-shadow-6": {
      boxShadow:
        "0 25px 50px rgba(var(--shadow-color), 0.25), 0 10px 20px rgba(var(--shadow-color), 0.2)",
    },
    ".sarv-shadow-b": {
      boxShadow:
        "0 1px 2px rgba(var(--shadow-color), 0.12), 0 1px 1px rgba(var(--shadow-color), 0.08)",
    },
  });
}
