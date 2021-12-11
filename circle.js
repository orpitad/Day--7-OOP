class circle {
  constructor(radius = 0, color = "") {
    this._radius = radius;
    this._color = color;
  }

//   get radius() {
//     return this._radius;
//   }

//   set radius(newRadius) {
//     this._radius = newRadius;
//   }

  getRadius() {
    return this._radius;
  }

  setRadius(newRadius) {
    this._radius = newRadius;
  }

  getColor() {
      return this._color;
  }

  setColor(newColor) {
    this._color = newColor;
  }

  toString() {
      return `Circle[ radius = ${this._radius} , color = ${ this._color}]`
  }

  getArea() {
      return parseFloat(parseFloat(22/7)*parseFloat(this._radius * this._radius))
  }

  getCircumference() {
    return parseFloat(parseFloat(22/7)*parseFloat(2 * this._radius));
  }
}

const circleObject = new circle(4, "red");
circleObject.setRadius(5)
console.log(circleObject.getRadius())
console.log(circleObject.getArea())
console.log(circleObject.getCircumference())

