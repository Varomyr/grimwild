class Crucible {
  constructor (data) {
    this.data = data;
  }

  getValue([x,y]) {
    return this.data[x - 1][y - 1];
  }

  getValues ([x,y]) {
    return [...new Set([this.getValue([x ,y]), this.getValue([y, x])])];
  }
}

export default Crucible
