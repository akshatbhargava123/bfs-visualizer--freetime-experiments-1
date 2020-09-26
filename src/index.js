import "./styles.css";

const app = document.getElementById("app");

let blockId = 0;

function createBlock() {
  const COLORS = ["red", "green", "yellow", "black", "blue"];
  const blockElement = document.createElement("div");
  const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  blockElement.id = blockId++;
  blockElement.style.opacity = Math.random();
  blockElement.style.backgroundColor = "blue";
  blockElement.classList.add("block");
  console.log("block made");
  return blockElement;
}

function createGrid() {
  const GRID_SIZE = 20;

  for (let row = 0; row < GRID_SIZE; row++) {
    const container = document.createElement("div");
    container.style.display = "flex";
    for (let col = 0; col < GRID_SIZE; col++) {
      container.appendChild(createBlock());
    }
    app.appendChild(container);
  }

  return {};
}

function main() {
  createGrid();
}

main();
