const canvas = document.getElementById('c1');
const ctx = canvas.getContext('2d');

// 08

class GameApp {
  constructor(element, gridRows, gridColumns) {
    this.element = element;
    this.gridRows = gridRows;
    this.gridColumns = gridColumns;
    this.element.addEventListener('click', (event) =>
      this.getClickCoords(event)
    );
    this.createGameGrid();
  }

  createGameGrid() {
    this.getCellSize();
    return (this.grid = Array.from({ length: this.gridRows }, () =>
      Array.from({ length: this.gridColumns }, () => 0)
    ));
  }

  getCellSize() {
    this.cellWidth = this.element.clientWidth / this.gridColumns;
    this.cellHeight = this.element.clientHeight / this.gridRows;
    return [this.cellWidth, this.cellHeight];
  }

  getClickCoords(event) {
    let cellX = Math.floor(event.offsetX / this.cellWidth);
    let cellY = Math.floor(event.offsetY / this.cellHeight);
    this.changeCellValue([cellX, cellY]);
    return [cellX, cellY];
  }

  changeCellValue(coords) {
    const [x, y] = coords;
    this.grid[y][x] ? (this.grid[y][x] -= 1) : (this.grid[y][x] += 1);
    this.fillRectCell(x, y, this.grid[y][x]);
    return this.grid[y][x];
  }

  fillRectCell(x, y, value) {
    const cellPositionX = x * this.cellHeight;
    const cellPositionY = y * this.cellWidth;
    value ? (ctx.fillStyle = 'black') : (ctx.fillStyle = 'white');

    ctx.fillRect(cellPositionX, cellPositionY, this.cellHeight, this.cellWidth);
  }
}

const app = new GameApp(canvas, 10, 10);
