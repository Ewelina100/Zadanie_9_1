function getTriangleArea(a, h) {
  if((a > 0) && (h > 0)) {
    return a*h/2;
  }
  else {
    return "Nieprawid³owe dane";
  }
}
console.log(getTriangleArea(10, 6))

var triangle1Area = getTriangleArea(12, 15);
var triangle2Area = getTriangleArea(8, 5);
var triangle3Area = getTriangleArea(14, 7);