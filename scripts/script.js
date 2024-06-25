let colors = settings.colors;
let keyBindings = settings.keyBindings;
let selectedColor = settings.colors.C;

function updateSelectedColorDisplay() {
  document.getElementById("currentColor").style.backgroundColor =
    selectedColor === "transparent" ? "#FFFFFF" : selectedColor;
}

function createPalette() {
  const palette = document.getElementById("palette");
  const colorOrder = Object.keys(colors);

  colorOrder.forEach((colorName) => {
    const colorDiv = document.createElement("div");
    colorDiv.className = "color";
    colorDiv.style.backgroundColor = colors[colorName];
    colorDiv.addEventListener("click", () => {
      selectedColor = colors[colorName];
      updateSelectedColorDisplay();
    });
    palette.appendChild(colorDiv);
  });

  const clearDiv = document.createElement("div");
  clearDiv.className = "clear";
  clearDiv.textContent = "Clear";
  clearDiv.addEventListener("click", () => {
    selectedColor = "transparent";
    updateSelectedColorDisplay();
  });
  palette.appendChild(clearDiv);
}

function createGrid() {
  const grid = document.getElementById("grid");
  for (let i = 0; i < 16 * 16; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.addEventListener("click", () => {
      pixel.style.backgroundColor = selectedColor;
    });
    grid.appendChild(pixel);
  }
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key in keyBindings) {
    selectedColor = colors[keyBindings[key]];
    updateSelectedColorDisplay();
  }
});

createPalette();
createGrid();
updateSelectedColorDisplay();
