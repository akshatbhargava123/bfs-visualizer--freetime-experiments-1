import "./styles.css";
import { GRID_SIZE, COLORS } from "./constants";

const app = document.getElementById("app");

function startBFS(row, col) {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const inBounds = (col, row) => {
    return !(row < 0 || col < 0 || row >= GRID_SIZE || col >= GRID_SIZE);
  };

  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ];

  const visited = {};

  const BFS = (row, col) => {
    if (visited[row] && visited[row][col]) return;

    if (!visited[row]) visited[row] = {};
    visited[row][col] = true;

    const blockId = Math.ceil(row * GRID_SIZE + col);
    const blockElem = document.getElementById(blockId);
    blockElem.style.backgroundColor = color;

    for (let i = 0; i < dirs.length; i++) {
      const newRow = row + dirs[i][0];
      const newCol = col + dirs[i][1];

      if (
        inBounds(newCol, newRow) &&
        !(visited[newRow] && visited[newRow][newCol])
      ) {
        setTimeout(() => {
          BFS(newRow, newCol);
        }, 500);
      }
    }
  };

  BFS(row, col);
}

function createBlock(blockId) {
  const blockElement = document.createElement("div");
  // const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  blockElement.id = blockId;
  blockElement.style.opacity = Math.random();
  blockElement.style.backgroundColor = "red";
  blockElement.classList.add("block");
  blockElement.addEventListener("click", function () {
    const row = Math.floor(blockId / GRID_SIZE);
    const col = Math.floor(blockId % GRID_SIZE);
    startBFS(row, col);
  });
  return blockElement;
}

function createGrid() {
  let blockId = 0;

  for (let row = 0; row < GRID_SIZE; row++) {
    const container = document.createElement("div");
    container.style.display = "flex";
    for (let col = 0; col < GRID_SIZE; col++) {
      container.appendChild(createBlock(blockId++));
    }
    app.appendChild(container);
  }

  return {};
}

function main() {
  createGrid();
}

main();
