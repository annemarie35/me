// Random colored link underlines — same as blahg
const colors = ["#24d05a", "#eb4888", "#10a2f5", "#e9bc3f"];

function pickColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

document.querySelectorAll("a").forEach((link) => {
  link.style.textDecorationColor = pickColor();
  link.addEventListener("mouseenter", () => {
    link.style.textDecorationColor = pickColor();
  });
});
