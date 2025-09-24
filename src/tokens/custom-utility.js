export default function cbAnimate({ addUtilities }) {
  addUtilities({
    ".cb-animate": {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeDasharray: "200",
      strokeDashoffset: "200",
      transition: "stroke-dashoffset 1.1s ease-in-out",
    },
  });
}
