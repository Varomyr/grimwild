class Crucible {
  constructor (data) {
    this.data = data;
  }

  getValue ([x,y]) {
    return new Set([this.data[x -1 ][y - 1], this.data[y - 1][x - 1]]);
  }
}

export default Crucible
