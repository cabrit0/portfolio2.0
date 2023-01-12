export function createAnimatedGradient(element) {
  /* const colors = [
    "#000000",
    "#e5989b",
    "#264653",
    "#2a9d8f",
    "#e9c46a",
    "#000000",
    "#264653",
    "#2a9d8f",
    "#e9c46a",
    "#000000",
    "#e76f51",
    "#8eecf5",
    "#03045e",
    "#e9c46a",
    "#000000",
    "#e76f51",
    "#8eecf5",
    "#03045e",
    "#000000",
    "#f5cac3",
    "#9b2226",
    "#8eecf5",
    "#03045e",
    "#000000",
    "#f5cac3",
    "#9b2226",
    "#ffd60a",
    "#7209b7",
    "#f72585",
    "#560bad",
    "#4361ee",
    "#4cc9f0",
  ];

  let x = 0;
  let y = 0;
  let currentColorIndex = 0;

  function updateGradient() {
    element.style.backgroundImage = `
      linear-gradient(to right, ${colors[currentColorIndex]} 0%, ${
      colors[(currentColorIndex + 1) % colors.length]
    } 25%, ${colors[(currentColorIndex + 2) % colors.length]} 50%, ${
      colors[(currentColorIndex + 3) % colors.length]
    } 75%, ${colors[(currentColorIndex + 4) % colors.length]} 100%),
      linear-gradient(to top, ${colors[currentColorIndex]} 0%, ${
      colors[(currentColorIndex + 1) % colors.length]
    } 25%, ${colors[(currentColorIndex + 2) % colors.length]} 50%, ${
      colors[(currentColorIndex + 3) % colors.length]
    } 75%, ${colors[(currentColorIndex + 4) % colors.length]} 100%)
    `;
    element.style.backgroundBlendMode = "multiply";
    element.style.backgroundPosition = `${x}px ${y}px`;
    x -= 1;
    y -= 1;
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }

  setInterval(updateGradient, 10); */
}
